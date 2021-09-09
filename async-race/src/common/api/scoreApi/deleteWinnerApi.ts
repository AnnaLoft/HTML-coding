import baseUrl from '../base-urlApi';

const deleteWinnersApi = async (id: number): Promise<Response> => {
  const response: Response = await fetch(`${baseUrl.base}/winners/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export default deleteWinnersApi;
