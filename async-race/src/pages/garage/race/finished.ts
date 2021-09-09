import { CarsInMove } from '../cars/state-cars';
import raceState, { FinishedSet, newWinner, RaceStateKeyT } from './race-state';
import countScore from '../score/count-score';
import showTheWinner from './show-the-winner';

const Finished = (propCar: HTMLElement, id: number): void => {
  const car = propCar;
  CarsInMove.delete(Number(id));

  if (FinishedSet.size === 0) {
    FinishedSet.add(id);
    newWinner.id = Number(id);
    const RaceStateI = (Number(id) as unknown) as RaceStateKeyT;
    const ms = 1000;
    const durationInSec = (raceState[(RaceStateI)].duration / ms);
    newWinner.time = Number(durationInSec.toString().split('').splice(0, 4).join(''));
    showTheWinner(newWinner.id, newWinner.time);
    countScore();
  } else {
    FinishedSet.add(id);
  }
};

export default Finished;
