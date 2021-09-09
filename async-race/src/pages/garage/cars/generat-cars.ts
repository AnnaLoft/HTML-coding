import CreateNewCar from './new-car';
import createGarage from '../create-garage';
import { HandlerT } from '../../types/types';

const generateCarsHandler: HandlerT = () => {
  const needCars = 100;
  let promise: Promise<void>;
  for (let i = 0; i < needCars; i += 1) {
    promise = CreateNewCar(true);
  }
  promise.then(() => {
    createGarage();
  });
};

export default generateCarsHandler;
