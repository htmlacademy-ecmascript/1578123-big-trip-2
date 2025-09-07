const AUTHORIZATION = 'Basic LzEqsnAZcyFAhycAhjMk';

const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const GAP_IN_MILLISECONDS = 3_600_000;

const INVALID_BASE_PRICE_PATTERN = /\D+/;

const DATE_UNIT = 'day';

const DefaultPoint = {
  DATE_FROM: null,
  DATE_TO: null,
  TYPE: 'flight',
};

const DateFormat = {
  DAY: 'D',
  DAY_MONTH: 'D MMM',
  MONTH_DAY:'MMM D',
  HOUR_MINUTE: 'HH:mm',
  DAY_MONTH_YEAR_HOUR_MINUTE: 'DD/MM/YY HH:mm',
  DURATION_MINUTE: 'mm[M]',
  DURATION_HOUR_MINUTE: 'HH[H] mm[M]',
  FLATPICKR_OUTPUT: 'd/m/y H:i',
  PAD_SYMBOL: '0',
  PAD_LENGTH: 2,
  DAY_SYMBOL: 'd',
};

const TripInfo = {
  START: 0,
  END: -1,
  MAX_NAMES_COUNT: 3,
  SEPARATOR_DATE: '&nbsp;&mdash;&nbsp;',
  SEPARATOR_TITLE: ' &mdash; ',
  SEPARATOR_TITLE_MAX: ' &mdash;...&mdash; ',
};

const BasePrice = {
  MIN: 1,
  DEFAULT: 0,
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST:'past',
};

const NoPointsMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  ERROR: 'ERROR',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const Url = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  AUTHORIZATION,
  END_POINT,
  GAP_IN_MILLISECONDS,
  INVALID_BASE_PRICE_PATTERN,
  DATE_UNIT,
  DefaultPoint,
  DateFormat,
  TripInfo,
  BasePrice,
  FilterType,
  NoPointsMessage,
  SortType,
  Mode,
  UserAction,
  UpdateType,
  Method,
  Url,
  TimeLimit,
};
