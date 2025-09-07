import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {humanizeDateTime} from '../utils/point-date-helper.js';
import {GAP_IN_MILLISECONDS, INVALID_BASE_PRICE_PATTERN, BasePrice, DateFormat} from '../const.js';

function createEventTypeTemplate (pointTypes, selectedType, isDisabled) {
  return pointTypes.map((type, i) => (
    `<div class="event__type-item">
      <input
        id="event-type-${type}-${i}"
        class="event__type-input  visually-hidden"
        type="radio"
        name="event-type"
        value="${type}"
        ${type === selectedType ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${i}">
        ${type}
      </label>
    </div>`
  )).join('');
}

function createDestinationsTemplate (allDestinations, isDisabled) {
  return allDestinations.map(({name, id}) => (
    `<option value="${name}" id=${id} ${isDisabled ? 'disabled' : ''}></option>`
  )).join('');
}

function createOffersTemplate (availableOffers, selectedOffers, isDisabled) {
  const offersListTemplate = availableOffers.map(({id, title, price}) => {
    const isChecked = selectedOffers.some((offer) => offer.id === id);

    return (
      `<div class="event__offer-selector">
        <input
          class="event__offer-checkbox  visually-hidden"
          id="${id}"
          type="checkbox"
          name="event-offer-${id}"
          ${isChecked ? 'checked' : ''}
          ${isDisabled ? 'disabled' : ''}
        >
        <label class="event__offer-label" for="${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`
    );
  }).join('');

  return availableOffers.length ? `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offersListTemplate}
      </div>
    </section>` : '';
}

function createDescriptionTemplate ({description, pictures}) {
  const hasDescription = !!description;
  const hasPictures = pictures && pictures.length;
  const hasEventDetails = hasDescription || hasPictures;

  const picturesListTemplate = hasPictures ? pictures.map((picture) => (
    `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`
  )).join('') : '';

  return hasEventDetails ? `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">
        Destination
      </h3>
      ${hasDescription ? `<p class="event__destination-description">${description}</p>` : ''}
      ${hasPictures ? `
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${picturesListTemplate}
          </div>
        </div>` : ''}
    </section>` : '';
}

function createTemplate({point, extraData, isDisabled, isSaving, isDeleting}) {
  const {basePrice, dateFrom, dateTo, type} = point;
  const {allDestinations, destination, pointTypes, availableOffers, selectedOffers} = extraData;
  const {name: destinationName} = destination;

  const humanDateTimeFrom = humanizeDateTime(dateFrom);
  const humanDateTimeTo = humanizeDateTime(dateTo);

  const eventTypeTemplate = createEventTypeTemplate(pointTypes, type, isDisabled);
  const destinationsTemplate = createDestinationsTemplate(allDestinations, isDisabled);
  const offersTemplate = createOffersTemplate(availableOffers, selectedOffers, isDisabled);
  const descriptionTemplate = createDescriptionTemplate(destination);

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input
              class="event__type-toggle visually-hidden"
              id="event-type-toggle"
              type="checkbox"
              ${isDisabled ? 'disabled' : ''}
            >
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${eventTypeTemplate}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination">
              ${type}
            </label>
            <input
              class="event__input event__input--destination"
              id="event-destination"
              type="text"
              name="event-destination"
              value="${he.encode(destinationName ?? '')}"
              list="destination-list"
              required
              ${isDisabled ? 'disabled' : ''}
            >
            <datalist id="destination-list">
              ${destinationsTemplate}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time">From</label>
            <input
              class="event__input  event__input--time"
              id="event-start-time"
              type="text"
              name="event-start-time"
              value="${humanDateTimeFrom}"
              ${isDisabled ? 'disabled' : ''}
            >
            &mdash;
            <label class="visually-hidden" for="event-end-time">To</label>
            <input
              class="event__input  event__input--time"
              id="event-end-time"
              type="text"
              name="event-end-time"
              value="${humanDateTimeTo}"
              ${isDisabled ? 'disabled' : ''}
            >
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price">
              <span class="visually-hidden">Price</span>&euro;
            </label>
            <input
              class="event__input  event__input--price"
              id="event-price"
              type="number" step="1"
              name="event-price"
              value="${he.encode(basePrice.toString())}"
              required
              ${isDisabled ? 'disabled' : ''}
            >
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
          <button class="event__reset-btn" type="reset">${isDeleting ? 'Canceling...' : 'Cancel'}</button>
        </header>
        <section class="event__details">
          ${offersTemplate}
          ${descriptionTemplate}
        </section>
      </form>
    </li>`
  );
}

class PointAddNewView extends AbstractStatefulView {
  #datepickerFrom = null;
  #datepickerTo = null;

  #handleFormSubmit = null;
  #handleDataRequest = null;
  #handleDeleteClick = null;

  constructor({point, extraData, onFormSubmit, onDataRequest, onDeleteClick}) {
    super();
    this._setState(PointAddNewView.parsePointToState({
      point,
      extraData,
    }));

    this.#handleFormSubmit = onFormSubmit;
    this.#handleDataRequest = onDataRequest;
    this.#handleDeleteClick = onDeleteClick;

    this._restoreHandlers();
  }

  get template() {
    return createTemplate(this._state);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  reset(properties) {
    this.updateElement(
      PointAddNewView.parsePointToState(properties),
    );
  }

  _restoreHandlers() {
    this.element.querySelectorAll('.event__type-input').forEach((input) => input.addEventListener('change', this.#eventTypeChangeHandler));
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#eventDestinationChangeHandler);
    this.element.addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#basePriceChangeHandler);
    this.element.querySelectorAll('.event__offer-checkbox').forEach((input) => input.addEventListener('input', this.#selectedOffersChangeHandler));
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#formDeleteClickHandler);
    this.#setDatepickerFrom();
    this.#setDatepickerTo();
  }

  #setDatepickerFrom() {
    const config = {
      defaultDate: this._state.point.dateFrom,
      maxDate: this._state.point.dateFrom ? new Date(new Date(this._state.point.dateTo).getTime() - GAP_IN_MILLISECONDS).toISOString() : null,
      enableTime: true,
      'time_24hr': true,
      dateFormat: DateFormat.FLATPICKR_OUTPUT,
      onChange: this.#dateFromChangeHandler,
    };

    this.#datepickerFrom = flatpickr(
      this.element.querySelector('input[name=event-start-time]'),
      config,
    );
  }

  #setDatepickerTo() {
    const config = {
      defaultDate: this._state.point.dateTo,
      minDate: this._state.point.dateFrom ? new Date(new Date(this._state.point.dateFrom).getTime() + GAP_IN_MILLISECONDS).toISOString() : null,
      enableTime: true,
      'time_24hr': true,
      dateFormat: DateFormat.FLATPICKR_OUTPUT,
      onChange: this.#dateToChangeHandler,
    };

    this.#datepickerTo = flatpickr(
      this.element.querySelector('input[name=event-end-time]'),
      config
    );
  }

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(PointAddNewView.parseStateToPoint(this._state));
  };

  #eventTypeChangeHandler = (evt) => {
    evt.preventDefault();
    const updatedPoint = {
      ...this._state.point,
      type: evt.target.value,
      offers: [],
    };
    this.updateElement({
      point:updatedPoint,
      extraData:this.#handleDataRequest(updatedPoint),
    });
  };

  #eventDestinationChangeHandler = (evt) => {
    evt.preventDefault();
    const updatedDestination = this._state.extraData.allDestinations.find((destination) => destination.name === evt.target.value);

    if (!updatedDestination) {
      return;
    }

    const updatedPoint = {
      ...this._state.point,
      destination: updatedDestination.id
    };
    this.updateElement({
      point:updatedPoint,
      extraData: this.#handleDataRequest(updatedPoint),
    });
  };

  #basePriceChangeHandler = (evt) => {
    evt.preventDefault();
    const priceInput = evt.target;
    const priceInputValue = priceInput.value.trim();
    const newPriceInputValue = parseInt(priceInputValue, 10) ? parseInt(priceInputValue, 10) : BasePrice.DEFAULT;

    priceInput.setCustomValidity('');

    if (newPriceInputValue < BasePrice.MIN || INVALID_BASE_PRICE_PATTERN.test(priceInputValue)) {
      priceInput.setCustomValidity(`Введите ЦЕЛОЕ число от ${BasePrice.MIN} и больше`);
      priceInput.reportValidity();
    }

    this._setState({
      point: {
        ...this._state.point,
        basePrice: newPriceInputValue,
      }
    });
  };

  #selectedOffersChangeHandler = () => {
    const updatedPoint = {
      ...this._state.point,
      offers: [...this.element.querySelectorAll('.event__offer-checkbox:checked')].map((item) => item.id),
    };
    this.updateElement({
      point:updatedPoint,
      extraData: this.#handleDataRequest(updatedPoint),
    });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    const destinationInput = this.element.querySelector('.event__input--destination');
    const destinationInputValue = destinationInput.value.trim();
    const destinationOptions = Array.from(document.querySelectorAll('datalist option')).map((option) => option.value);

    const priceInput = this.element.querySelector('.event__input--price');
    const priceInputValue = priceInput.value.trim();

    destinationInput.setCustomValidity('');

    if (!destinationOptions.includes(destinationInputValue)) {
      destinationInput.value = '';
      destinationInput.setCustomValidity('Выберите город из списка, нажав на стрелку');
      destinationInput.reportValidity();
      return;
    }

    priceInput.setCustomValidity('');

    if (parseInt(priceInputValue, 10) < BasePrice.MIN || INVALID_BASE_PRICE_PATTERN.test(priceInputValue)) {
      priceInput.setCustomValidity(`Введите ЦЕЛОЕ число от ${BasePrice.MIN} и больше`);
      priceInput.reportValidity();
      return;
    }

    this.#handleFormSubmit(PointAddNewView.parseStateToPoint(this._state));
  };

  #dateFromChangeHandler = ([selectedDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateFrom: selectedDate.toISOString(),
      }
    });
    this.#setDatepickerTo();
  };

  #dateToChangeHandler = ([selectedDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateTo: selectedDate.toISOString(),
      }
    });
    this.#setDatepickerFrom();
  };

  static parsePointToState(properties) {
    return {
      ...properties,
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  static parseStateToPoint(state) {
    const newState = {...state};

    delete newState.isDisabled;
    delete newState.isSaving;
    delete newState.isDeleting;

    return newState;
  }
}

export default PointAddNewView;
