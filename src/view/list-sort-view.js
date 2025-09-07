import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../const.js';

function createTemplate({sortType}) {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item trip-sort__item--${SortType.DAY}">
        <input
          id="sort-${SortType.DAY}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${SortType.DAY}"
          data-sort-type="${SortType.DAY}"
          ${sortType === SortType.DAY ? 'checked' : ''}
        >
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.TIME}">
        <input
          id="sort-${SortType.TIME}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${SortType.TIME}"
          data-sort-type="${SortType.TIME}"
          ${sortType === SortType.TIME ? 'checked' : ''}
        >
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.PRICE}">
        <input
          id="sort-${SortType.PRICE}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${SortType.PRICE}"
          data-sort-type="${SortType.PRICE}"
          ${sortType === SortType.PRICE ? 'checked' : ''}
        >
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>`
  );
}

class ListSortView extends AbstractView{
  #curentSortType = null;

  #handleSortTypeChange = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#curentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createTemplate({
      sortType: this.#curentSortType
    });
  }

  #sortTypeChangeHandler = (evt) => {
    if (!evt.target.closest('input[data-sort-type]')) {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}

export default ListSortView;
