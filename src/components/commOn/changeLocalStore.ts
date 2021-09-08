import { ScoreStateScoreArrayT } from './types/commonTypes';

export const changeLocalStore = (guessWord: string, isRight: boolean) => {
  const localDataStr: string = localStorage.getItem('scoreState')!;
  const localData = JSON.parse(localDataStr);
  // eslint-disable-next-line
  for (const key of Object.entries(localData)) {
    if (key[0] === guessWord) {
      const changeCount: ScoreStateScoreArrayT = key[1] as ScoreStateScoreArrayT;
      if (isRight) {
        changeCount[2].right += 1;
      } else {
        changeCount[2].whrong += 1;
      }
      localStorage.setItem('scoreState', JSON.stringify(localData));
    }
  }
};

export const implementClicksLocalStore = (guessWord: string) => {
  const localDataStr: string = localStorage.getItem('scoreState')!;
  const localData = JSON.parse(localDataStr);
  // eslint-disable-next-line
  for (const key of Object.entries(localData)) {
    if (key[0] === guessWord) {
      const changeCount: ScoreStateScoreArrayT = key[1] as ScoreStateScoreArrayT;

      changeCount[2].clicks += 1;

      localStorage.setItem('scoreState', JSON.stringify(localData));
    }
  }
};
