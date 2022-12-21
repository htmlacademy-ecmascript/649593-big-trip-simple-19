import { createElement } from '../render';
import createNewPointFormTemplate from '../templates/new-point-form-template';
export default class NewPointFormView {
  #element = null;

  get template() {
    return createNewPointFormTemplate();
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
