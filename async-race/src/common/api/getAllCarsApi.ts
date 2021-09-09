import Car from '../../pages/entity/car';
import baseUrl from './base-urlApi';

const getAllCarsApi = async (): Promise<Array<Car>> => {
  const response: Response = await fetch(`${baseUrl.base}/garage`, {
    method: 'GET',
  });
  const data: Array<Car> = await response.json();
  return data;
};

export default getAllCarsApi;
