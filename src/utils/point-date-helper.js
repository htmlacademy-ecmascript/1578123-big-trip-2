import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {DATE_UNIT, DateFormat} from '../const.js';

dayjs.extend(duration);

const isDatesEqual = (dateA, dateB, unit = DATE_UNIT) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, unit);

const humanizeDateTime = (date) => date ? dayjs(date).format(DateFormat.DAY_MONTH_YEAR_HOUR_MINUTE) : '';

const humanizeDate = (date) => dayjs(date).format(DateFormat.MONTH_DAY);

const humanizeTime = (date) => dayjs(date).format(DateFormat.HOUR_MINUTE);

const humanizeTripInfoDates = (dates) => dates.map((date) => dayjs(date).format(DateFormat.DAY_MONTH));

const getTimeDifference = (dateFrom, dateTo) => {
  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTo);
  const datesDifference = date2.diff(date1);
  const durationData = dayjs.duration(datesDifference);

  if (durationData.asHours() < 1) {
    return durationData.format(DateFormat.DURATION_MINUTE);
  }

  const hoursMinutesTime = durationData.format(DateFormat.DURATION_HOUR_MINUTE);

  if (durationData.asDays() < 1) {
    return hoursMinutesTime;
  }

  const fullDaysTime = `${Math.trunc(durationData.asDays()).toString().padStart(DateFormat.PAD_LENGTH, DateFormat.PAD_SYMBOL)}${DateFormat.DAY_SYMBOL}`;

  return `${fullDaysTime} ${hoursMinutesTime}`;
};

const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const sortPointsByTime = (pointA, pointB) => {
  const timeA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const timeB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return timeB - timeA;
};

const sortPointsByStartDate = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const sortPointsByEndDate = (pointA, pointB) => dayjs(pointB.dateTo).diff(dayjs(pointA.dateTo));

export {
  isDatesEqual,
  humanizeDate,
  humanizeDateTime,
  humanizeTime,
  humanizeTripInfoDates,
  getTimeDifference,
  sortPointsByTime,
  sortPointsByPrice,
  sortPointsByStartDate,
  sortPointsByEndDate,
};
