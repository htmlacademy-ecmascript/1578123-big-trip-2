import PointsModel from './model/points-model.js';
import TablePresenter from './presenter/table-presenter';
import TripInfoView from './view/trip-info-view.js';
import ListFilterView from './view/list-filter-view.js';

import { render, RenderPosition } from './render';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainerElement = tripMainElement.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const tablePresenter = new TablePresenter({ container: pointsContainerElement, pointsModel });

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new ListFilterView(), filtersContainerElement);

pointsModel.init();
tablePresenter.init();
