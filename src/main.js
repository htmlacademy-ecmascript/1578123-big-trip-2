import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import TablePresenter from './presenter/table-presenter';
import TripInfoView from './view/trip-info-view.js';
import ListFilterView from './view/list-filter-view.js';

import { generateFilter } from './mock/filter.js';
import { render, RenderPosition } from './framework/render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainerElement = tripMainElement.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const tablePresenter = new TablePresenter({
  container: pointsContainerElement,
  pointsModel,
  destinationsModel,
  offersModel,
});

const filters = generateFilter(pointsModel.points);

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new ListFilterView({ filters }), filtersContainerElement);

tablePresenter.init();
