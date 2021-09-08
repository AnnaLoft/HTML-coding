import { History } from 'history';
import shuffleArray from './shuffleArray';
import addCartToAnswers from './addCartToAnswers';
import ChangeScoreApi from './../API/scoreApi/changeScore';

type gameCycleT = (
  cardClass: string,
  cardsAreaClass: string,
  winnersClass: string,
  errorsClass: string,
  repeatBtn: HTMLElement,
  history: History,
  answerLineLength: number,
  gameResult: string,
  gameWordsData: any
) => void;

const gameCycle: gameCycleT = (cardClass, cardsAreaClass, winnersClass,
  errorsClass, repeatBtn, history, answerLineLength, gameResult, gameWordsData) => {
  const location: string = history.location.pathname;
  const answersLineEl: HTMLElement = document.querySelector(`.${winnersClass}`)!;
  const cardsAreaEl: HTMLElement = document.querySelector(`.${cardsAreaClass}`)!;
  const correctAudio: HTMLAudioElement = new Audio('./sounds/correct.mp3');
  const errorAudio: HTMLAudioElement = new Audio('./sounds/error.mp3');
  const successAudio: HTMLAudioElement = new Audio('./sounds/success.mp3');
  const failureAudio: HTMLAudioElement = new Audio('./sounds/failure.mp3');
  const cardEls: NodeListOf<HTMLElement> = document.querySelectorAll(`.${cardClass}`)!;
  const audiosArr: Array<HTMLAudioElement> = [];
  let tries: number = 0;
  let mistakes: number = 0;
 

  cardEls.forEach((card) => {
    audiosArr.push((card.children[0].children[0] as HTMLAudioElement));
  });
  shuffleArray(audiosArr);
  const ask = () => setTimeout(() => { audiosArr[0]?.play(); }, 500);
  ask();

  const cardClickHandler = (e: MouseEvent): void => {
 


    if (audiosArr[0].id === (((e.target as HTMLElement).firstChild as HTMLImageElement).id)) {
      ((e.target as HTMLElement).children[1] as HTMLImageElement).style.transform = 'matrix(1.00,0.00,0.00,0.01,0,0)';
      ((e.target as HTMLElement).parentElement as HTMLElement).style.pointerEvents = 'none';
      correctAudio.play();
      tries += 1;
      setTimeout(() => { (e.target as HTMLElement).style.opacity = '0'; }, 300);
      addCartToAnswers(answersLineEl, answerLineLength, tries,
        `<div><img src=${((e.target as HTMLElement).children[1] as HTMLImageElement).src}></img></div>`);
    
      ChangeScoreApi.addRight(audiosArr[0].id, gameWordsData)
      ask();
      audiosArr.splice(0, 1);
    } else {
      (e.target as HTMLElement).style.boxShadow = '0 0 30px -5px rgb(255, 8, 0)';
      mistakes += 1;
      errorAudio.play();
      tries += 1;
      setTimeout(() => { (e.target as HTMLElement).style.boxShadow = ''; }, 500);
      addCartToAnswers(answersLineEl, answerLineLength, tries,
        `<div class=${errorsClass} ><img src=${((e.target as HTMLElement).children[1] as HTMLImageElement).src}></img></div>`);
      ChangeScoreApi.addWrong(audiosArr[0].id, gameWordsData)
      ask();
    }

    if (audiosArr.length === 0) {
      const repeatBtnEl = repeatBtn;
      setTimeout(() => {
        answersLineEl.innerHTML = '';
        repeatBtnEl.style.display = 'none';
        (cardsAreaEl as HTMLElement).style.display = 'block';
        (cardsAreaEl as HTMLElement).style.margin = '0 auto';
        if (mistakes === 0) {
          successAudio.play();
          cardsAreaEl.innerHTML = `
          <div class=${gameResult}> 
          <div style="color: #caffbf;">Yay! Good job! </div>
            <img src='./images/success.png'}></img>
           </div>
          `;
        } else {
          failureAudio.play();
          cardsAreaEl.innerHTML = `
            <div class=${gameResult} >
              <div style="color: #ffadad;">You did ${mistakes} mistakes, try again!</div>
              <img src='./images/failure.png'}></img>
            </div>
            `;
        }
        setTimeout(() => {
          if (history.location.pathname === location) {
            history.push('/');
          }
        }, 2500);
      }, 1000);
    }
  };

  const repeatHandler = (): Promise<void> => audiosArr[0]?.play();

  cardEls.forEach((card) => (card.firstChild as HTMLElement).removeEventListener('click', cardClickHandler));
  cardEls.forEach((card) => (card.firstChild as HTMLElement).addEventListener('click', cardClickHandler));
  repeatBtn.removeEventListener('click', repeatHandler);
  repeatBtn.addEventListener('click', repeatHandler);
};

export default gameCycle;
