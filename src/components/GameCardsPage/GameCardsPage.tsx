import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import gameCycle from '../commOn/gameCycle';
import shuffleArray from '../commOn/shuffleArray';
import s from './GameCardsPage.module.css';
import { hideEl, showEl } from '../commOn/hide-show-EL';
import { useState } from 'react';
import WordsApi from './../API/wordsApi/wordsApi';
import tryToConvertB64src from '../commOn/tryToConvertB64src';

type PropsT = {
  categoryName: any
  wrongWords: Array<Array<string>> | null
};

const GameCardsPage: React.FC<PropsT> = ({ categoryName, wrongWords }: PropsT) => {
  const [gameWordsData, setGameWordsData]: any = useState([])
  const history: History = useHistory();
  let HtmlCardsData: Array<JSX.Element>;
  let answerLineLength: number = 0;


  useEffect(() => {
    if (gameWordsData.length > 0) {
      const sCardWidth = 45;
      const cardDif = 5;
      const answersEl: HTMLElement = document.querySelector(`.${s.answers}`)!;
      const newWidth = ((Math.floor(answersEl.clientWidth / sCardWidth)) * sCardWidth + cardDif).toString();
      answersEl.style.width = `${newWidth}px`;
      answerLineLength = Number((Math.floor(answersEl.clientWidth / sCardWidth)));
    }
  });

  if (wrongWords) {
    if (gameWordsData !== wrongWords) {
      setGameWordsData(wrongWords)
    }
    shuffleArray(wrongWords);
    HtmlCardsData = wrongWords.map((word: any) => {
      let [wordImgSrc, wordSoundSrc] = tryToConvertB64src(word.WordData.img, word.WordData.sound)
      return (
        <div className={s.card} id={word._id} key={word._id}>
          <div className={s.card_front} id={word._id}>
            <audio src={wordSoundSrc} id={word._id} />
            <img className={s.card_pic} src={wordImgSrc} id={word._id} alt="" />
          </div>
        </div>)
    });
  } else {
    if (gameWordsData.length !== 0) {
      shuffleArray(gameWordsData);
      HtmlCardsData = gameWordsData.map((word: any) => {
        let [wordImgSrc, wordSoundSrc] = tryToConvertB64src(word.WordData.img, word.WordData.sound)
        return (
          <div className={s.card} key={word._id}>
            <div className={s.card_front}>
              <audio src={wordSoundSrc} id={word._id} />
              <img className={s.card_pic} src={wordImgSrc} id={word._id} alt="" />
            </div>
          </div>
        )
      });
    } else {
      useEffect(() => { WordsApi.getAllWordsOfCategory(categoryName).then((res) => setGameWordsData(res)) }, [gameWordsData])
      return (
        <div className={s.preloader}>
        <div className={s.preloader__row}>
          <div className={s.preloader__item}></div>
          <div className={s.preloader__item}></div>
        </div>
      </div>
      )
    }
  }

  useEffect(() => {
    const startBtn: HTMLElement = document.querySelector(`.${s.startBtn}`)!;
    const repeatBtn: HTMLElement = document.querySelector(`.${s.repeatBtn}`)!;
    if (wrongWords?.length === 0) {
      startBtn.style.display = 'none';
      repeatBtn.style.display = 'none';
    }

    const startBtnHandler = (): void => {
      const startBtnEl = startBtn;
      startBtnEl.style.pointerEvents = 'none';
      hideEl(startBtn);
    
      gameCycle(s.card, s.cards, s.answers_string, s.error,
        repeatBtn, history, answerLineLength, s.gameResult, gameWordsData);
      setTimeout(() => { showEl(repeatBtn); }, 300);
    };

    startBtn?.addEventListener('click', startBtnHandler);
    return () => {
      startBtn?.removeEventListener('click', startBtnHandler);
    };
  });

  return (
    <div>
      <div className={s.cards}>
        {HtmlCardsData}
      </div>
      <div className={s.controller}>
        <div className={s.answers}>
          <div className={s.answers_string} />
        </div>
        <div className={s.buttons_wrapper}>
          <button type="button" className={s.startBtn}>Start game</button>
          <button type="button" className={s.repeatBtn}>repeat</button>
        </div>
      </div>
    </div>
  );
};

export default GameCardsPage;
