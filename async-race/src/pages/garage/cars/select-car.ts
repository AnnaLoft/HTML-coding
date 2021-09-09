import garageUpdateBtnHandler from './update-garage';
import { selectedCar } from './state-cars';
import { HandlerT } from '../../types/types';
import Car from '../../entity/car';
import getAllCarsApi from '../../../common/api/getAllCarsApi';

const selectCarBtnsHandler: HandlerT = (e) => {
  getAllCarsApi().then((DbcarsArr: Car[]) => {
    const updateNameInput: HTMLInputElement = document.querySelector('.garage-page__update__name');
    const updateColorInput: HTMLInputElement = document.querySelector('.garage-page__update__color');
    const garageUpdateBtn: HTMLElement = document.querySelector('.garage-page__update__btn');
    const target = e.target as HTMLElement;

    DbcarsArr.forEach((DbCar: Car) => {
      if (DbCar.id === Number(target.id)) {
        selectedCar.id = Number(target.id);
        updateNameInput.value = DbCar.name;
        updateColorInput.value = DbCar.color;
      }
    });

    selectedCar.name = updateNameInput.value;
    selectedCar.color = updateColorInput.value;

    const nameChangeHandler: HandlerT = (ev) => {
      selectedCar.name = (ev.target as HTMLInputElement).value;
    };
    const colorChangeHandler: HandlerT = (ev) => {
      selectedCar.color = (ev.target as HTMLInputElement).value;
    };

    updateNameInput.addEventListener('change', nameChangeHandler);
    updateColorInput.addEventListener('change', colorChangeHandler);
    garageUpdateBtn.addEventListener('click', garageUpdateBtnHandler);
  });
};

export default selectCarBtnsHandler;
