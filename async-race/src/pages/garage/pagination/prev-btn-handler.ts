import { ableBtn } from '../../../common/able-disable-btn';
import createGarage from '../create-garage';
import PaginationState from '../../../common/pagination-state';
import { HandlerT } from '../../types/types';

const prevBtnHandler:HandlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  ableBtn(nextBtn);
  PaginationState.garagePage -= 1;
  pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
  createGarage();
};
export default prevBtnHandler;
