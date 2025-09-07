import {render, RenderPosition} from './framework/render.js';

import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

import TripInfoPresenter from './presenter/trip-info-presenter.js';
import TablePresenter from './presenter/table-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import NewPointButtonView from './view/new-point-button-view.js';

import PointsApiService from './points-api-service.js';
import {AUTHORIZATION, END_POINT} from './const.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainerElement = tripMainElement.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
});
const filterModel = new FilterModel();

const tablePresenter = new TablePresenter({
  container: pointsContainerElement,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose,
});
const filterPresenter = new FilterPresenter({
  filterContainer: filtersContainerElement,
  filterModel,
  pointsModel,
});
const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripMainElement,
  pointsModel,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick,
});

function handleNewPointFormClose() {
  tablePresenter.handleNewPointFormClose();
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  tablePresenter.createPoint();
  tablePresenter.handleNewPointButtonClick();
  newPointButtonComponent.element.disabled = true;
}

tablePresenter.init();
filterPresenter.init();
tripInfoPresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, tripMainElement, RenderPosition.BEFOREEND);
  });
