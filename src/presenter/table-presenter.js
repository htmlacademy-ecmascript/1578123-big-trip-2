import { render } from '../render.js';

import PointsListView from '../view/points-list-view.js';
import ListSortView from '../view/list-sort-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

export default class TablePresenter {
  RENDER_COUNT = 3;
  pointsListComponent = new PointsListView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(new ListSortView(), this.container);
    render(this.pointsListComponent, this.container);
    render(new PointEditView(), this.pointsListComponent.getElement());

    for (let i = 0; i < this.RENDER_COUNT; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
