import { render, replace } from '../framework/render.js';

import PointsListView from '../view/points-list-view.js';
import ListSortView from '../view/list-sort-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import NoPointsView from '../view/no-points-view.js';

import { NoPointsMessage } from '../const.js';
import { isEscapeKey } from '../utils/common.js';

export default class TablePresenter {
  #tableContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #pointsListComponent = new PointsListView();

  constructor({ container, pointsModel, destinationsModel, offersModel }) {
    this.#tableContainer = container;

    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#renderTable();
  }

  #renderPoint({point, allDestinations, destination, availableOffers, selectedOffers, pointTypes}) {
    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      destination,
      availableOffers,
      selectedOffers,
      onEditClick: () => {
        replaceItemToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointEditView({
      point,
      destination,
      allDestinations,
      availableOffers,
      pointTypes,
      onFormSubmit: () => {
        replaceFormToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onQuitEditClick: () => {
        replaceFormToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceItemToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToItem() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }

  #renderTable() {
    render(new ListSortView(), this.#tableContainer);
    render(this.#pointsListComponent, this.#tableContainer);

    const points = this.#pointsModel.points;

    if (!points.length) {
      render(new NoPointsView({
        message: NoPointsMessage.EVERYTHING
      }), this.#tableContainer);

      return;
    }

    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      this.#renderPoint({
        point,
        allDestinations: this.#destinationsModel.destinations,
        destination: this.#destinationsModel.getDestinationById(point.destination),
        availableOffers: this.#offersModel.getOffersByType(point.type),
        selectedOffers: this.#offersModel.getOffersByIds(point.offers),
        pointTypes: this.#offersModel.getPointTypes()
      });
    }
  }
}
