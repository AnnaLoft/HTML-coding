import { HandlerT } from '../pages/types/types';
import removeAddHandler from './remove-add-handler';

const hidePage = (propsPage: HTMLElement) => {
  const page = propsPage;
  page.style.transition = '0.1s';
  page.style.opacity = '0';
  setTimeout(() => { page.style.display = 'none'; }, 100);
};

const showPage = (propsPage: HTMLElement) => {
  const page = propsPage;
  page.style.transition = '0.1s';
  page.style.display = 'block';
  setTimeout(() => { page.style.opacity = '1'; }, 100);
};

const pagesSwither = ():void => {
  const toGarageBtn: HTMLElement = document.querySelector('.to-garage');
  const toWinners: HTMLElement = document.querySelector('.to-winners');
  const garagePage: HTMLElement = document.querySelector('.garage-page');
  const winnersPage: HTMLElement = document.querySelector('.winners-page');

  const toGarageBtnHandler:HandlerT = () => {
    hidePage(winnersPage);
    setTimeout(() => { showPage(garagePage); }, 100);
  };

  const toWinnersHandler:HandlerT = () => {
    hidePage(garagePage);
    setTimeout(() => { showPage(winnersPage); }, 100);
  };

  removeAddHandler(toGarageBtn, 'click', toGarageBtnHandler);
  removeAddHandler(toWinners, 'click', toWinnersHandler);
};

export default pagesSwither;
