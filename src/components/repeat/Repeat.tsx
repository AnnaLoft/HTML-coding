import React from 'react';
import TrainCardsPage from '../TrainCardsPage/TrainCardsPage';
import GameCardsPage from '../GameCardsPage/GameCardsPage';
import { useState } from 'react';
import s from './Repeat.module.css';
import WordsApi from '../API/wordsApi/wordsApi';

type PropsT = {
  gameMode: boolean
};

const Repeat: React.FC<PropsT> = ({ gameMode }: PropsT) => {
  const [words, setWords] = useState([])
  const wrongWords: any = [];

  function compare(a: any, b: any) {
    if (a.WordData.Statistics.wrong > b.WordData.Statistics.wrong) {
      return -1;
    }
    if (a.WordData.Statistics.wrong < b.WordData.Statistics.wrong) {
      return 1;
    }
    return 0;
  }

  if (words.length === 0) {
    WordsApi.getAllWords().then((res) => setWords(res))
  } else {

    words.sort(compare);
    if (words.length > 8) {
      words.length = 8;
    }

    words.forEach((word: any) => {
      if (word.WordData.Statistics.wrong > 0) {
        wrongWords.push(word)
      }
    });



    if (!gameMode) {
      return (
        <div>
          <TrainCardsPage wordsData={null} categoryName={``} wrongWords={wrongWords} />
        </div>
      );
    }

    return (
      <div>
        <GameCardsPage categoryName={``} wrongWords={wrongWords} />
      </div>
    );
  } return (
    <div className={s.preloader}>
    <div className={s.preloader__row}>
      <div className={s.preloader__item}></div>
      <div className={s.preloader__item}></div>
    </div>
  </div>
  )
};

export default Repeat;
