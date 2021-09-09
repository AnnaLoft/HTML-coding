import getCarsApi from '../../common/api/getCarsApi';
import { disableBtn } from '../../common/able-disable-btn';
import createCar from './cars/create-car';
import { CarsStateArr } from './cars/state-cars';
import Garage from './garage';
import Pagination from './pagination/pagination';
import Car from '../entity/car';
import getAllCarsApi from '../../common/api/getAllCarsApi';

const createGarage = (): void => {
  const numberOfCars: HTMLElement = document.querySelector('.garage-page__garage__number-of-cars');
  const garagePageCars: HTMLElement = document.querySelector('.garage-page__garage__cars');
  garagePageCars.innerHTML = '';
  getCarsApi().then((res): void => {
    const carArr = res;
    CarsStateArr.splice(0, CarsStateArr.length);
    carArr.forEach((car: Car) => {
      garagePageCars.innerHTML += createCar(car.name, car.id);
      const stopBtn: HTMLElement = document.querySelector(`.car-${car.id}__engine-buttons__stop`);
      const carSvg: HTMLElement = document.querySelector(`.car-${car.id}__car-image`);
      disableBtn(stopBtn);
      carSvg.style.stroke = `${car.color}`;
      CarsStateArr.push(car);
    });
    Garage();
    getAllCarsApi().then((DbCarsArr) => {
      numberOfCars.innerHTML = `Garage (${DbCarsArr.length})`;
    });
  });
  Pagination();
};

export default createGarage;
