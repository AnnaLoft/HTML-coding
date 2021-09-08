import { CategoryDataT, ScoreStateT, SetsT } from './types/commonTypes';

const initLocalStorage = (sets: SetsT): void => {
  if (!localStorage.getItem('scoreState')) {
    let scoreState: ScoreStateT | Object = {};
    Object.values(sets).forEach((item) => {
      const cardsObj: CategoryDataT = Object.values(item)[0];
      const arr = Object.values(cardsObj);
      for (let i = 0; i < arr.length; i += 1) {
        const newArr = arr[i];
        for (let j = 0; j < newArr.length; j += 1) {
          scoreState = {
            ...scoreState,
            [newArr[0]]: [newArr[1], newArr[3], {
              clicks: 0,
              whrong: 0,
              right: 0,
              percent: 0,
            }],
          };
        }
      }
    });

    localStorage.setItem('scoreState', JSON.stringify(scoreState));
  }
};

export default initLocalStorage;
