import { CarsStateArr, CarsInMove } from '../cars/state-cars';
import startEngineApi from '../../../common/api/start-engineApi';
import animateCar from './animate-car';
import toggleRaceBtns from './toggle-race-btn';
import toggleStartBtn from './toggle-start-btn';
import { ableBtn } from '../../../common/able-disable-btn';
import { HandlerT, StartEngineApiDataT } from '../../types/types';
import Car from '../../entity/car';

const startRaceBtnHandler: HandlerT = () => {
  CarsStateArr.forEach((car: Car) => {
    const stopBtn: HTMLElement = document.querySelector(`.car-${car.id}__engine-buttons__stop`);
    startEngineApi(car.id).then((res: StartEngineApiDataT) => {
      const duration = res.distance / res.velocity;
      animateCar(car.id, duration);
      ableBtn(stopBtn);
    });
    CarsInMove.add(car.id);

    toggleRaceBtns();
    toggleStartBtn(car.id);
  });
};

export default startRaceBtnHandler;
