import baseUrl from './base-urlApi';

export const driveModeController: Array<AbortController> = [];

const driveModeApi = async (id: number, status: string): Promise<Response> => {
  driveModeController[id] = new AbortController();
  const response: Response = await fetch(`${baseUrl.base}/engine?id=${id}&status=${status}`, {
    method: 'GET',
    signal: driveModeController[id].signal,
  });
  return response;
};

export default driveModeApi;
