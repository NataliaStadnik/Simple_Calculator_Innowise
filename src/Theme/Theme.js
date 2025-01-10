import './theme.css';
import { allThemes } from './allThemes';

export class Theme {
  _color = 'white';

  constructor() {
    this.updateTheme();
    this.contolThemeButton();
  }

  updateTheme() {
    Object.entries(allThemes[this._color]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }

  contolThemeButton() {
    const btnGreen = document.querySelector('.btn-tool--green');
    btnGreen.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal ? this.closeModal() : this.createModal();
    });
  }

  createModal() {
    const div = document.createElement('div');
    div.className = 'modal';
    Object.keys(allThemes).forEach((elem) => {
      const btn = document.createElement('button');
      btn.classList = `btn-reset theme theme--${elem}`;
      btn.dataset.color = elem;
      div.append(btn);
    });
    document.querySelector('.wrapper').append(div);
    this.setTheme();
  }

  setTheme() {
    const themeBTN = document.querySelectorAll('[data-color]');
    themeBTN.forEach((btn) => {
      btn.addEventListener('click', () => {
        this._color = btn.dataset.color;
        this.updateTheme();
        this.closeModal();
      });
    });
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--close');
    modal.addEventListener('animationend', () => {
      modal.remove();
    });
  }
}
