import createScorePosition from './score-pos';
import getWinnersApi from '../../../common/api/scoreApi/getWinnersApi';
import Winner from '../../entity/winner';

const createScore = (sort?: string, order?: string): void => {
  const winnersBlock: HTMLElement = document.querySelector('.winners-page__winners');
  winnersBlock.innerHTML = '';
  getWinnersApi(sort, order).then((res) => {
    let number = 1;
    res.forEach((winner: Winner) => {
      createScorePosition(winner.id, winner.wins, winner.time, number);
      number += 1;
    });
  });
};

export default createScore;
