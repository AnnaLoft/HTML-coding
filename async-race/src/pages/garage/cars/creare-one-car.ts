import CreateNewCar from './new-car';
import createGarage from '../create-garage';

const createNewOneCar = (): void => {
  CreateNewCar().then(() => {
    createGarage();
  });
};

export default createNewOneCar;
