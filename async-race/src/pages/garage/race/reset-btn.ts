import { ableBtns, disableBtn } from '../../../common/able-disable-btn';
import { driveModeController } from '../../../common/api/drive-modeApi';
import stopEngineApi from '../../../common/api/stop-engineApi';
import { CarsStateArr } from '../cars/state-cars';
import toggleStartBtns from './toggle-start-btn';
import toggleRaceBtns from './toggle-race-btn';
import { HandlerT } from '../../types/types';
import Car from '../../entity/car';

const resetBtnHandler:HandlerT = () => {
  const raseBtn:HTMLElement = document.querySelector('.garage-page__race-reset-generate__race');
  toggleRaceBtns('resetOn');
  CarsStateArr.forEach((car: Car) => {
    const carEl: HTMLElement = document.querySelector(`.car-${car.id}__car-image`);
    const stopBtn: HTMLElement = document.querySelector(`.car-${car.id}__engine-buttons__stop`);
    stopEngineApi(car.id).then(() => {
      toggleRaceBtns();

      carEl.style.left = '0';
      driveModeController[car.id]?.abort();
      toggleStartBtns(car.id);
      disableBtn(stopBtn);
      ableBtns([raseBtn]);
    });

    // console.log(CarsInMove)
  });
};

export default resetBtnHandler;
