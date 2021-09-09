import { NewCarT } from '../../pages/types/types';
import Car from '../../pages/entity/car';
import baseUrl from './base-urlApi';

const updateCarApi = async (car: Car): Promise<Response> => {
  const newCar: NewCarT = {
    name: car.name,
    color: car.color,
  };
  const response: Response = await fetch(`${baseUrl.base}/garage/${car.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar),
  });
  return response;
};

export default updateCarApi;
