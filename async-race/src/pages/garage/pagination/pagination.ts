import { ableBtn, disableBtn } from '../../../common/able-disable-btn';
import getCarsApi from '../../../common/api/getCarsApi';
import PaginationState from '../../../common/pagination-state';
import removeAddHandler from '../../../common/remove-add-handler';
import Car from '../../entity/car';
import createGarage from '../create-garage';
import nextBtnHandler from './next-btn-handler';
import prevBtnHandler from './prev-btn-handler';

const Pagination = (): void => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  getCarsApi().then((DbCarsArr: Car[]) => {
    if (DbCarsArr.length === 0 && PaginationState.garagePage !== 1) {
      PaginationState.garagePage -= 1;
      pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
      createGarage();
    }
  });

  getCarsApi(PaginationState.garagePage + 1).then((DbCarsArr: Car[]) => {
    if (DbCarsArr.length === 0) {
      disableBtn(nextBtn);
    } else {
      ableBtn(nextBtn);
    }
  });

  if (PaginationState.garagePage === 1) {
    disableBtn(prevBtn);
  } else {
    ableBtn(prevBtn);
  }

  removeAddHandler(prevBtn, 'click', prevBtnHandler);
  removeAddHandler(nextBtn, 'click', nextBtnHandler);
};
export default Pagination;
