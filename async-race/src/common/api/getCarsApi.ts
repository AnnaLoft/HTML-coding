import Car from '../../pages/entity/car';
import PaginationState from '../pagination-state';
import baseUrl from './base-urlApi';

const getCarsApi = async (page?: number, limit?: number): Promise<Array<Car>> => {
  let pageToGo: number;
  let needLimit: number;
  if (!page) {
    pageToGo = PaginationState.garagePage;
  } else {
    pageToGo = page;
  }
  if (!limit) {
    needLimit = 7;
  } else {
    needLimit = limit;
  }

  const response: Response = await fetch(`${baseUrl.base}/garage?_page=${pageToGo}&_limit=${needLimit}`, {
    method: 'GET',
  });
  const data: Array<Car> = await response.json();
  return data;
};

export default getCarsApi;
