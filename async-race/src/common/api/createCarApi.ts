import { NewCarT } from '../../pages/types/types';
import baseUrl from './base-urlApi';

const createCarApi = async (car: NewCarT): Promise<Response> => {
  const response: Response = await fetch(`${baseUrl.base}/garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  return response;
};

export default createCarApi;
