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
  const durationData = dayjs.duration(datesDifference);

  if (durationData.asHours() < 1) {
    return durationData.format(DateFormat.DURATION_MINUTE);
  }

  if (durationData.asDays() < 1) {
    return durationData.format(DateFormat.DURATION_HOUR_MINUTE);
  }

  return durationData.format(DateFormat.DURATION_DAY_HOUR_MINUTE);
};

const getBasePrice = (a = BasePrice.MIN, b = BasePrice.MAX) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sortPointsByPrice = (pointA, pointB) => pointB.base_price - pointA.base_price;

const sortPointsByTime = (pointA, pointB) => {
  const timeA = dayjs(pointA.date_to).diff(dayjs(pointA.date_from));
  const timeB = dayjs(pointB.date_to).diff(dayjs(pointB.date_from));

  return timeB - timeA;
};

const sortPointsByStartDate = (pointA, pointB) => dayjs(pointA.date_from).diff(dayjs(pointB.date_from));

const isDatesEqual = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');

export { humanizeDate, humanizeTime, humanizeDateTime, getTimeDifference, getBasePrice, sortPointsByPrice, sortPointsByTime, sortPointsByStartDate, isDatesEqual };
