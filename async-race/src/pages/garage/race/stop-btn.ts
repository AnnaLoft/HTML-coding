import { disableBtn } from '../../../common/able-disable-btn';
import { driveModeController } from '../../../common/api/drive-modeApi';
import stopEngineApi from '../../../common/api/stop-engineApi';
import { HandlerT } from '../../types/types';
import { CarsInMove } from '../cars/state-cars';
import raceState, { RaceStateKeyT } from './race-state';
import toggleRaceBtns from './toggle-race-btn';
import toggleStartBtn from './toggle-start-btn';

const stopBtnHandler: HandlerT = (e) => {
  const target = e.target as HTMLElement;
  const stopBtn: HTMLElement = document.querySelector(`.car-${target.id}__engine-buttons__stop`);
  const car: HTMLElement = document.querySelector(`.car-${target.id}__car-image`);

  stopEngineApi(Number(target.id)).then((res) => {
    if (res.status === 200) {
      const RaceStateI = (Number(target.id) as unknown) as RaceStateKeyT;
      raceState[RaceStateI].isCarStoped = true;
      setTimeout(() => { car.style.transform = 'matrix(1.00,0.00,0.00,1.00,0,0)'; }, 100);
      setTimeout(() => { car.style.left = '0'; }, 400);
      driveModeController[Number(target.id)].abort();
      CarsInMove.delete(target.id);
      toggleStartBtn(Number(target.id));
      toggleRaceBtns();
      disableBtn(stopBtn);
    }
  });
};

export default stopBtnHandler;
