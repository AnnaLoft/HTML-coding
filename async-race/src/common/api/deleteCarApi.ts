import baseUrl from './base-urlApi';

const deleteCarApi = async (id: string): Promise<Response> => {
  const response: Response = await fetch(`${baseUrl.base}/garage/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export default deleteCarApi;
