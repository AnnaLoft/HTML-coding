import updateCarApi from '../../../common/api/updateCarApi';
import { selectedCar } from './state-cars';
import createGarage from '../create-garage';
import { HandlerT } from '../../types/types';

const garageUpdateBtnHandler:HandlerT = () => {
  const updateNameInput: HTMLInputElement = document.querySelector('.garage-page__update__name');
  const updateColorInput: HTMLInputElement = document.querySelector('.garage-page__update__color');

  updateCarApi(selectedCar).then(() => {
    createGarage();
    updateNameInput.value = '';
    updateColorInput.value = '#000';
  });
};

export default garageUpdateBtnHandler;
