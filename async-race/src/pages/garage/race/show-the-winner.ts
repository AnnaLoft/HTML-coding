import getAllCarsApi from '../../../common/api/getAllCarsApi';
import eIdtoDbCarsI from '../../../common/converter-id-to-all-cars-i';
import removeAddHandler from '../../../common/remove-add-handler';
import Car from '../../entity/car';

const showTheWinner = (id: number, durationInSec: number): void => {
  const theWinnerText: HTMLElement = document.querySelector('.garage-page__theWinner__text');
  const theWinnerEl: HTMLElement = document.querySelector('.garage-page__theWinner');

  getAllCarsApi().then((DbCarsArr: Car[]) => {
    const DbI = eIdtoDbCarsI(DbCarsArr, id);
    theWinnerText.innerHTML = `
        The winner of race is ${DbCarsArr[DbI].name} with time ${durationInSec}.
      `;
    theWinnerEl.style.zIndex = '99';
    theWinnerEl.style.opacity = '1';
  });

  const okBtn: HTMLElement = document.querySelector('.garage-page__theWinner__btn');

  const okBtnHandler = () => {
    theWinnerEl.style.opacity = '0';
    theWinnerEl.style.zIndex = '-1';
  };

  removeAddHandler(okBtn, 'click', okBtnHandler);
};

export default showTheWinner;
