import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import TablePresenter from './presenter/table-presenter';
import TripInfoView from './view/trip-info-view.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';

import { render, RenderPosition } from './framework/render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainerElement = tripMainElement.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tablePresenter = new TablePresenter({
  container: pointsContainerElement,
  pointsModel,
  destinationsModel,
  offersModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersContainerElement,
  filterModel,
  pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  tablePresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(newPointButtonComponent, tripMainElement, RenderPosition.BEFOREEND);

tablePresenter.init();
filterPresenter.init();
