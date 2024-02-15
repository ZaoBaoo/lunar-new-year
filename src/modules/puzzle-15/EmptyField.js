/**
 * Пустая ячейка.
 *
 * @class EmptyField
 * @returns {HTMLDivElement} <div class="tile empty" unselectable="on"></div>
 */
class EmptyField {
  constructor({ x, y }) {
    const el = document.createElement('div');
    el.className = 'puzzle__tile puzzle__tile_empty';
    el.setAttribute('unselectable', 'on');
    el.textContent = '';

    this.el = el;
    this.id = 16;
    this.position = {
      x,
      y,
    };
  }
}

export default EmptyField;
