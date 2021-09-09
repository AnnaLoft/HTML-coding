import deleteCarBtnsHandler from './cars/delete-car';
import selectCarBtnsHandler from './cars/select-car';
import startBtnsHandler from './race/start-btn';
import startRaceBtnHandler from './race/race-btn';
import resetBtnHandler from './race/reset-btn';
import generateCarsHandler from './cars/generat-cars';
import createNewOneCar from './cars/creare-one-car';
import removeAddHandler from '../../common/remove-add-handler';
import clearUpdateBtnHandler from './clear-update-hand';

const Garage = (): void => {
  const createNewCarBtn: HTMLElement = document.querySelector('.garage-page__create__btn');
  const deleteCarBtns: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__buttons__remove'));
  const selectCarBtns: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__buttons__select'));
  const startBtns: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__engine-buttons__start'));
  const startRaceBtn: HTMLElement = document.querySelector('.garage-page__race-reset-generate__race');
  const resetBtn: HTMLElement = document.querySelector('.garage-page__race-reset-generate__reset');
  const generateCars: HTMLElement = document.querySelector('.garage-page__race-reset-generate__generate');
  const clearUpdateBtn: HTMLElement = document.querySelector('.garage-page__clear__btn');

  removeAddHandler(createNewCarBtn, 'click', createNewOneCar);
  removeAddHandler(startRaceBtn, 'click', startRaceBtnHandler);
  removeAddHandler(resetBtn, 'click', resetBtnHandler);
  removeAddHandler(generateCars, 'click', generateCarsHandler);
  removeAddHandler(clearUpdateBtn, 'click', clearUpdateBtnHandler);
  deleteCarBtns.forEach((deleteCarBtn) => removeAddHandler(deleteCarBtn, 'click', deleteCarBtnsHandler));
  selectCarBtns.forEach((selectCarBtn) => removeAddHandler(selectCarBtn, 'click', selectCarBtnsHandler));
  startBtns.forEach((startBtn) => removeAddHandler(startBtn, 'click', startBtnsHandler));
};

export default Garage;
