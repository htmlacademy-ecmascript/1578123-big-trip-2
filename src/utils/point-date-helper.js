import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { BasePrice, DateFormat } from '../const.js';

dayjs.extend(duration);

const humanizeDateTime = (date) => dayjs(date).format(DateFormat.DAY_MONTH_YEAR_HOUR_MINUTE);

const humanizeDate = (date) => dayjs(date).format(DateFormat.MONTH_DAY);

const humanizeTime = (date) => dayjs(date).format(DateFormat.HOUR_MINUTE);

const getTimeDifference = (dateFrom, dateTo) => {
  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTo);
  const datesDifference = date2.diff(date1);
  const durationObject = dayjs.duration(datesDifference);
  if (durationObject.asHours() < 1) {
    return durationObject.format(DateFormat.DURATION_MINUTE);
  }
  if (durationObject.asDays() < 1) {
    return durationObject.format(DateFormat.DURATION_HOUR_MINUTE);
  }
  return durationObject.format(DateFormat.DURATION_DAY_HOUR_MINUTE);
};

const getBasePrice = (a = BasePrice.MIN, b = BasePrice.MAX) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { humanizeDate, humanizeTime, humanizeDateTime, getTimeDifference, getBasePrice };
