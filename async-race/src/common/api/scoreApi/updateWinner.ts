import Winner from '../../../pages/entity/winner';
import baseUrl from '../base-urlApi';

const updateWinnerApi = async (id: number, wins: number, time: number): Promise<Winner> => {
  const newWinner = {
    id,
    wins,
    time,
  };
  const response: Response = await fetch(`${baseUrl.base}/winners/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWinner),
  });

  const data: Winner = await response.json();

  return data;
};

export default updateWinnerApi;
