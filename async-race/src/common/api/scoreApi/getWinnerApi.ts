import Winner from '../../../pages/entity/winner';
import baseUrl from '../base-urlApi';

const getWinnerApi = async (id: number):Promise<Winner> => {
  const response: Response = await fetch(`${baseUrl.base}/winners/${id}`, {
    method: 'GET',
  });
  const data: Winner = await response.json();
  return data;
};

export default getWinnerApi;
