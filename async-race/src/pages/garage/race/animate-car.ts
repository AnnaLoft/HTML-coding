import driveModeApi from '../../../common/api/drive-modeApi';
import { CarsInMove } from '../cars/state-cars';
import toggleRaceBtns from './toggle-race-btn';
import raceState, { FinishedSet, RaceStateKeyT } from './race-state';
import stopBtnHandler from './stop-btn';
import Finished from './finished';

const animateCar = (id: number, duration: number): void => {
  const car: HTMLElement = document.querySelector(`.car-${id}__car-image`);
  const stopBtn: HTMLElement = document.querySelector(`.car-${id}__engine-buttons__stop`);
  const RaceStateI = (Number(id) as unknown) as RaceStateKeyT;
  raceState[RaceStateI] = {
    id,
    driveStatus: 0,
    isCarStoped: false,
    duration,
  };
  FinishedSet.clear();
  const start = performance.now();
  driveModeApi(Number(id), 'drive').then((res: Response) => { raceState[RaceStateI].driveStatus = res.status; });
  requestAnimationFrame(function animate(time) {
    const progressShift = 93;
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timeFraction;
    car.style.left = `${progress * progressShift}%`;
    if (raceState[RaceStateI].driveStatus !== 500 && raceState[RaceStateI].isCarStoped !== true) {
      if (timeFraction < 1) { requestAnimationFrame(animate); }
    } else if (raceState[RaceStateI].driveStatus === 500) {
      CarsInMove.delete(id);
    }
    if (raceState[RaceStateI].isCarStoped === true) {
      CarsInMove.delete(Number(id));
      raceState[RaceStateI].isCarStoped = false;
    }
    if (timeFraction === 1) { Finished(car, Number(id)); }
    toggleRaceBtns();
  });
  stopBtn.addEventListener('click', stopBtnHandler);
};
export default animateCar;
