import { render } from '../framework/render.js';

import PointsListView from '../view/points-list-view.js';
import ListSortView from '../view/list-sort-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

export default class TablePresenter {
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  pointsListComponent = new PointsListView();

  constructor({ container, pointsModel, destinationsModel, offersModel }) {
    this.container = container;

    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.points = [...this.#pointsModel.points];
    this.destinations = [...this.#destinationsModel.destinations];
    this.offers = [...this.#offersModel.offers];

    render(new ListSortView(), this.container);
    render(this.pointsListComponent, this.container);

    const pointEditProps = {
      point: this.points[0],
      destinations: this.destinations,
      offers: this.offers,
    };

    render(new PointEditView(pointEditProps), this.pointsListComponent.element);

    for (let i = 1; i < this.points.length; i++) {
      const props = {
        point: this.points[i],
        destinations: this.destinations,
        offers: this.offers,
      };

      render(new PointView(props), this.pointsListComponent.element);
    }
  }
}
