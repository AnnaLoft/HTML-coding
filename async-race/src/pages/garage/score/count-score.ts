import getWinnersApi from '../../../common/api/scoreApi/getWinnersApi';
import createWinnerApi from '../../../common/api/scoreApi/createWinnerApi';
import { newWinner } from '../race/race-state';
import updateWinnerApi from '../../../common/api/scoreApi/updateWinner';
import createScore from './create-score';
import Winner from '../../entity/winner';

const countScore = (): void => {
  let noMatches = true;
  getWinnersApi().then((res) => {
    res.forEach((Dbwinner: Winner) => {
      if (Number(newWinner.id) === Number(Dbwinner.id)) {
        newWinner.wins = Dbwinner.wins + 1;
        if (Dbwinner.time < newWinner.time) {
          updateWinnerApi(Dbwinner.id, newWinner.wins, Dbwinner.time).then(() => {
            createScore();
          });
        } else {
          updateWinnerApi(Dbwinner.id, newWinner.wins, newWinner.time).then(() => {
            createScore();
          });
        }
        noMatches = false;
      }
    });
    if (noMatches === true) {
      createWinnerApi(newWinner.id, 1, newWinner.time).then(() => {
        createScore();
      });
    }
  });
};

export default countScore;
