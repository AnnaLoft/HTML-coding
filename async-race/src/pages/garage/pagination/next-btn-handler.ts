import { ableBtn, disableBtn } from '../../../common/able-disable-btn';
import getCarsApi from '../../../common/api/getCarsApi';
import createGarage from '../create-garage';
import PaginationState from '../../../common/pagination-state';
import { HandlerT } from '../../types/types';

const nextBtnHandler:HandlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  ableBtn(prevBtn);

  PaginationState.garagePage += 1;
  getCarsApi().then((res) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
      PaginationState.garagePage -= 1;
    }

    pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
    createGarage();
  });
};

export default nextBtnHandler;
