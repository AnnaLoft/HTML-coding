import createCarApi from '../../../common/api/createCarApi';
import { NewCarT } from '../../types/types';
import ColorRandom from './random/color-random';
import NameRandom from './random/name-random';

const CreateNewCar = (random?: boolean): Promise<void> => {
  const carNameInput: HTMLInputElement = document.querySelector('.garage-page__create__name');
  const carColorInput: HTMLInputElement = document.querySelector('.garage-page__create__color');

  let newCarName: string = carNameInput.value;
  let newCarColor: string = carColorInput.value;

  if (carNameInput.value === '') newCarName = NameRandom();

  if (random === true) newCarColor = ColorRandom();

  const newCar: NewCarT = {
    name: newCarName,
    color: newCarColor,
  };

  return createCarApi(newCar).then(() => {
    carNameInput.value = '';
    carColorInput.value = '#000000';
  });
};

export default CreateNewCar;
