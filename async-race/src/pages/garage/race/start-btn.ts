import startEngineApi from '../../../common/api/start-engineApi';
import animateCar from './animate-car';
import { CarsInMove } from '../cars/state-cars';
import toggleRaceBtns from './toggle-race-btn';
import toggleStartBtn from './toggle-start-btn';
import { ableBtn } from '../../../common/able-disable-btn';
import { HandlerT } from '../../types/types';

const startBtnsHandler: HandlerT = (e) => {
  const target = e.target as HTMLElement;
  const stopBtn: HTMLElement = document.querySelector(`.car-${target.id}__engine-buttons__stop`);
  startEngineApi(Number(target.id)).then((res) => {
    const duration = res.distance / res.velocity;
    animateCar(Number(target.id), duration);
    ableBtn(stopBtn);
  });
  CarsInMove.add(target.id);
  toggleRaceBtns();
  toggleStartBtn(Number(target.id));
};

export default startBtnsHandler;
