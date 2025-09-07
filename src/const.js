const POINTS_COUNT = 10;

const TEST_DATE = '2025-10-07T07:00:00';

const GAP_IN_MILLISECONDS = 3_600_000;

const DefaultPoint = {
  DATE_FROM: new Date().toISOString(),
  DATE_TO: new Date((new Date().getTime() + GAP_IN_MILLISECONDS)).toISOString(),
  TYPE: 'bus',
};

const BLANK_POINT = {
  'base_price': '',
  'date_from': DefaultPoint.DATE_FROM,
  'date_to': DefaultPoint.DATE_TO,
  'destination': '',
  'is_favorite': false,
  'offers': [],
  'type': DefaultPoint.TYPE,
  'id': crypto.randomUUID()
};

const INTEGER_PATTERN = /^-?\d+$/;

const DateFormat = {
  MONTH_DAY:'MMM D',
  HOUR_MINUTE: 'HH:mm',
  DAY_MONTH_YEAR_HOUR_MINUTE: 'DD/MM/YY HH:mm',
  DURATION_MINUTE: 'mm[M]',
  DURATION_HOUR_MINUTE: 'HH[H] mm[M]',
  DURATION_DAY_HOUR_MINUTE: 'DD[D] HH[H] mm[M]',
  FLATPICKR_OUTPUT: 'd/m/y H:i'
};

const BasePrice = {
  MIN: 100,
  MAX: 9999
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST:'past'
};

const NoPointsMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price'
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
};

export { POINTS_COUNT, TEST_DATE, GAP_IN_MILLISECONDS, BLANK_POINT, INTEGER_PATTERN, DateFormat, BasePrice, FilterType, NoPointsMessage, Mode, SortType, UserAction, UpdateType };
