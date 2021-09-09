import Winner from '../../entity/winner';
import RaceState from '../../entity/race';

export type RaceStateKeyT = keyof typeof raceState;

const raceState = new RaceState();

export const FinishedSet = new Set();

export const newWinner = new Winner();

export default raceState;
