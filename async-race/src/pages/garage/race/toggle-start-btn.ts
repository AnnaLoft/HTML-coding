import { CarsInMove } from '../cars/state-cars';

const toggleStartBtn = (id: number): void => {
  const startBtn: HTMLElement = document.querySelector(`.car-${id}__engine-buttons__start`);

  if (CarsInMove.has(id)) {
    startBtn.style.pointerEvents = 'none';
    startBtn.style.opacity = '0.3';
  } else {
    startBtn.style.pointerEvents = 'unset';
    startBtn.style.opacity = '1';
  }
};

export default toggleStartBtn;
