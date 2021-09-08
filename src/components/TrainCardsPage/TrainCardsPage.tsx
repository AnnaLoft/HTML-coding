import React, { useEffect, useState } from 'react';
import s from './TrainCardsPage.module.css';
import WordsApi from './../API/wordsApi/wordsApi';
import ChangeScoreApi from './../API/scoreApi/changeScore';
import tryToConvertB64src from '../commOn/tryToConvertB64src';
import { getAllCategoriesThunk } from '../../redux/categories-reducer';
import { useDispatch, useSelector } from 'react-redux';

type PropsT = {
  categoryName: string
  wrongWords: Array<Array<string>> | null
  wordsData: any
};

const TrainCardsPage: React.FC<PropsT> = ({ categoryName, wrongWords, wordsData }: PropsT) => {


  let HtmlCardsData: Array<JSX.Element>;

  if (wrongWords) {
    HtmlCardsData = wrongWords.map((word: any) => {
      let [wordImgSrc, wordSoundSrc] = tryToConvertB64src(word.WordData.img, word.WordData.sound)
      return (
        <div className={s.card} key={word._id}>y
          <audio src={wordSoundSrc} />
          <div className={s.card_front}>
            <img className={s.card__image} src={wordImgSrc} alt="" />
            <div className={s.rotate_pic}>
              <p className={s.name}>{word.WordData.eng}</p>
              <img className={s.rotateImg} src="./images/rotate.svg" alt="" />
            </div>
          </div>
          <div className={s.card_back}>
            <img className={s.card__backImage} src={wordImgSrc} alt="" />
            <p className={`${s.name} ${s.transletedName}`}>{word.WordData.rus}</p>
          </div>
        </div>
      )
    });
  } else {
    if (wordsData) {
      const filtredWordsData = wordsData.filter((word: any) => word.WordData.category === categoryName)
      HtmlCardsData = filtredWordsData.map((word: any) => {
        let [wordImgSrc, wordSoundSrc] = tryToConvertB64src(word.WordData.img, word.WordData.sound)
        return (
          <div className={s.card} key={word._id}>
            <audio src={wordSoundSrc} id={word._id} />
            <div className={s.card_front} id={word._id}>
              <img className={s.card__image} src={wordImgSrc} id={word._id} alt="" />
              <div className={s.rotate_pic} id={word._id}>
                <p className={s.name} id={word._id}>{word.WordData.eng}</p>
                <img className={s.rotateImg} src="./images/rotate.svg" alt="" id={word._id} />
              </div>
            </div>
            <div className={s.card_back}>
              <img className={s.card__backImage} src={wordImgSrc} alt="" />
              <p className={`${s.name} ${s.transletedName}`}>{word.WordData.rus}</p>
            </div>
          </div>
        )
      });
    } else {
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
    const rotateBtns: NodeListOf<HTMLElement> = document.querySelectorAll(`.${s.rotateImg}`)!;
    const cardEls: NodeListOf<HTMLElement> = document.querySelectorAll(`.${s.card}`)!;

    const rotateHandler = (e: Event): void => {
      ((e.target as HTMLElement).parentElement?.parentElement?.parentElement)?.classList.add(`${s.rotated}`);
    };
    const cardElHandler = (e: MouseEvent): void => (e.target as HTMLElement)?.classList.remove(`${s.rotated}`);
    const audioHandler = (e: MouseEvent): void => {
      const audio: HTMLAudioElement = new Audio(((e.currentTarget as HTMLElement)
        .children[0] as HTMLAudioElement).src);
      if (((e.target as HTMLElement).className === s.rotateImg) || ((e.target as HTMLElement)
        .className === s.card_back) || ((e.target as HTMLElement)
          .className === s.card__backImage)) return;
      audio.play();
        ChangeScoreApi.addClick((e.target as HTMLElement).id, wordsData)
    };



    rotateBtns.forEach((rotateBtn) => {
      rotateBtn.removeEventListener('click', rotateHandler);
      rotateBtn.addEventListener('click', rotateHandler);
    });
    cardEls.forEach((cardEl) => cardEl.addEventListener('click', audioHandler));
    cardEls.forEach((cardEl) => cardEl.addEventListener('mouseleave', cardElHandler));

    return () => {
      rotateBtns.forEach((rotateBtn) => () => rotateBtn.removeEventListener('click', rotateHandler));
      cardEls.forEach((cardEl) => cardEl.addEventListener('click', audioHandler));
      cardEls.forEach((cardEl) => cardEl.removeEventListener('mouseleave', cardElHandler));
    };
  });

  return (
    <div className={s.cards}>
      {HtmlCardsData}
    </div>
  );
};

export default TrainCardsPage;
