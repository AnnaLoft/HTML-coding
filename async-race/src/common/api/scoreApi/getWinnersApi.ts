import Winner from '../../../pages/entity/winner';
import PaginationState from '../../pagination-state';
import baseUrl from '../base-urlApi';

const DEFAULT_LIMIT = 10;

const getWinnersApi = async (
  sort?: string,
  order: string = 'ASC',
  page?: number,
  limit?: number,
): Promise<Winner[]> => {
  let pageToGo: number;
  let needLimit: number;
  if (!page) {
    pageToGo = PaginationState.winnersPage;
  } else {
    pageToGo = page;
  }
  if (!limit) {
    needLimit = DEFAULT_LIMIT;
  } else {
    needLimit = limit;
  }
  if (!sort) {
    const response: Response = await fetch(`${baseUrl.base}/winners?_page=${pageToGo}&_limit=${needLimit}`, {
      method: 'GET',
    });
    const data: Winner[] = await response.json();

    return data;
  }
  const response: Response = await fetch(`${baseUrl.base}/winners?_sort=${sort}&_order=${order}&_page=${pageToGo}&_limit=${needLimit}`, {
    method: 'GET',
  });

  const data: Winner[] = await response.json();
  return data;
};

export default getWinnersApi;
