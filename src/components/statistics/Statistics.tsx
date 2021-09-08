import React, { useReducer, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import s from './Statistics.module.css';
import Button from '../commOn/button/Button';
import {
  compareByClicksToBig, compareByClicksToSmall, compareByEngNameToBig,
  compareByEngNameToSmall, compareByPercentToBig, compareByPercentToSmall,
  compareByRightToBig, compareByRightToSmall, compareByRusNameToBig,
  compareByRusNameToSmall, compareByWrongToBig,
  compareByWrongToSmall,
} from '../commOn/compareFunctions';
import WordsApi from './../API/wordsApi/wordsApi';
import { randomIp } from '../commOn/initLocalStorageLogin';

type PropsT = {
  categories: any
  dbWords: any
  setDbWords: any
};

const Statistics: React.FC<PropsT> = ({ categories, dbWords, setDbWords }: PropsT) => {
  if (dbWords.length === 0) {
    WordsApi.getAllWords().then((res) => { setDbWords(res) })
  }

  if (dbWords.length > 0) {
    const [isSortedToBig, setIsSortedToBig] = useState(false);
    const [sortedBy, setSortedBy] = useState('');
    const history: History = useHistory();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    let wrongWords: number = 0;

    useEffect(() => {
      const repeatBtnEl: HTMLElement = document.querySelector(`.${s.repeatBtn}`)!;
      const categoriesEls: NodeListOf<HTMLElement> = document.querySelectorAll(`.${s.category}`);
      const sortHandler = (e: any): void => {
        if ((e.target as HTMLElement).className === sortedBy) {
          if (isSortedToBig) { setIsSortedToBig(false); } else { setIsSortedToBig(true); }
        } else {
          setIsSortedToBig(false);
          setSortedBy((e.target as HTMLElement).className);
          if (!isSortedToBig) { setIsSortedToBig(false); } else { setIsSortedToBig(true); }
        }
      };
      if (wrongWords === 0) {
        repeatBtnEl.style.display = 'none';
        repeatBtnEl.style.pointerEvents = 'none';
      } else {
        repeatBtnEl.style.opacity = '1';
        repeatBtnEl.style.pointerEvents = 'unset';
      }
      categoriesEls.forEach((category) => {
        category.addEventListener('click', sortHandler);
      });
      return () => {
        categoriesEls.forEach((category) => {
          category.removeEventListener('click', sortHandler);
        });
      };
    });

    const onReset = (): void => {
      localStorage.setItem('user', `${randomIp}`)
      forceUpdate();
    };

    const onRepit = (): void => {
      history.push('/Repeat');
    };

    const Category = categories.map((category: any, mapId: any) => {
      let inCategoryWordsEls: any = []
      dbWords.forEach((word: any) => {
        if (word.WordData.Statistics.wrong > 0) { wrongWords += 1 }
        if (word.WordData.category === category.CategoryData.name) {
          inCategoryWordsEls.push([
            <div key={`${word._id}`} className={s.categotyWord}>
              <div className={s.categoryWordNames}>
                <div className={s.categoryWordName}><img className={s.card_name} src=".././images/eng.png"></img>{word.WordData.eng}</div>
                <div className={s.categoryTranslate}> <img className={s.card_translate} src=".././images/ru.png"></img>{word.WordData.rus}</div>
              </div>
            
              <div className={s.categoryStatiscics}>
                <div className={s.clicksStatiscics}>
                  clicks:&#160;
                  {word.WordData.Statistics.clicks}
                </div>
                <div className={s.rightStatiscics}>
                  right&#160;
                  {word.WordData.Statistics.right}
                </div>
                <div className={s.whrongStatiscics}>
                  mistakes:&#160;
                  {word.WordData.Statistics.wrong}
                </div>
                <div className={s.precentStatiscics}>
                errors%:&#160;
                  {word.WordData.Statistics.percent}
                </div>
              </div>
            </div>,
            word])
        }

        switch (sortedBy) {
          case s.categoryWordName:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByEngNameToSmall);
            } else { inCategoryWordsEls.sort(compareByEngNameToBig); }
            break;
          case s.categoryTranslate:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByRusNameToSmall);
            } else { inCategoryWordsEls.sort(compareByRusNameToBig); }
            break;
          case s.clicksStatiscics:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByClicksToSmall);
            } else { inCategoryWordsEls.sort(compareByClicksToBig); }
            break;
          case s.rightStatiscics:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByRightToSmall);
            } else { inCategoryWordsEls.sort(compareByRightToBig); }
            break;
          case s.whrongStatiscics:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByWrongToSmall);
            } else { inCategoryWordsEls.sort(compareByWrongToBig); }
            break;
          case s.precentStatiscics:
            if (isSortedToBig) {
              inCategoryWordsEls.sort(compareByPercentToSmall);
            } else { inCategoryWordsEls.sort(compareByPercentToBig); }
            break;
          default:
            break;
        }
      });

      const wordsInFour = (line: number): JSX.Element => {
        const first4Words: Array<JSX.Element> = [];
        const second4Words: Array<JSX.Element> = [];
        for (let k = 0; k < inCategoryWordsEls.length; k += 1) {
          if (k < 4) {
            first4Words.push(inCategoryWordsEls[k][0]);
          } else {
            second4Words.push(inCategoryWordsEls[k][0]);
          }
        }
        if (line === 1) {
          return (
            <div className={s.categoryWords0_3}>
              {first4Words}
            </div>
          );
        }
        return (
          <div className={s.categoryWords4_8}>
            {second4Words}
          </div>
        );
      };

      let wordImgSrc
      try { wordImgSrc = atob(category.CategoryData.img) } catch
      { wordImgSrc = category.CategoryData.img }


      return (
      <div className={s.test}>
        <div className={s.categoryName}>
          <div className={s.categoryName__text}>{category.CategoryData.name}</div>
        </div>
        <div className={s.category} key={`${category._id}`}>
         
          <div className={s.categoryWords}>
            {wordsInFour(1)}
            {wordsInFour(2)}
          </div>
        </div>
      </div>
      );
    });

    return (
      <div className={s.categories}>
        {Category}
        <div className={s.btns}>
          <div className={s.resetBtn}>
            <Button value="Reset" action={onReset} />
          </div>
          <div className={s.repeatBtn}>
            <Button value="Train difficult words" action={onRepit} />
          </div>
        </div>
      </div>
    );
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


};

export default Statistics;
