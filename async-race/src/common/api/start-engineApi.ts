import { StartEngineApiDataT } from '../../pages/types/types';
import baseUrl from './base-urlApi';

const startEngineApi = async (id: number): Promise<StartEngineApiDataT> => {
  const response: Response = await fetch(`${baseUrl.base}/engine?id=${id}&status=started`, {
    method: 'GET',
  });

  const data: StartEngineApiDataT = await response.json();

  return data;
};

export default startEngineApi;
