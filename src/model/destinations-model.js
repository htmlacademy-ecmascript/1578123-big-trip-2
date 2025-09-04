import { destinations } from '../mock/destinations';

class DestinationsModel {
  #destinations = destinations;

  get destinations() {
    return this.#destinations;
  }
}

export default DestinationsModel;
