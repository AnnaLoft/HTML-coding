import createGarage from './create-garage';

const createGaragePage = (): void => {
  const garagePage: HTMLElement = document.querySelector('.garage-page');
  garagePage.innerHTML
    += `
        <div class="garage-page__buttons">
          <div class="garage-page__create">
            <input class="garage-page__create__name" type="text"> 
            <input class="garage-page__create__color" type="color">
            <button class="garage-page__create__btn">create</button>
          </div>
          <div class="garage-page__update">
            <input class="garage-page__update__name" type="text">
            <input class="garage-page__update__color" type="color">
            <button class="garage-page__update__btn">update</button>
            <button class="garage-page__clear__btn">clear</button>
          </div>
          <div class="garage-page__race-reset-generate">
            <button class="garage-page__race-reset-generate__race">race</button>
            <button class="garage-page__race-reset-generate__reset">reset</button>
            <button class="garage-page__race-reset-generate__generate">generate cars</button>
          </div>
        </div>
        <div class="garage-page__garage">
          <h3 class="garage-page__garage__number-of-cars">Garage (0)</h3>
          <div class="garage-page__garage__cars"></div>
        </div>
        <div class="garage-page__pagination">
          <button class="garage-page__pagination__button garage-page__pagination__button__prev">prev</button>
          <p class="garage-page__pagination__pageInfo">page 1</p>
          <button class="garage-page__pagination__button garage-page__pagination__button__next">next</button>
        </div> 
        <div class="garage-page__theWinner">
          <div class="garage-page__theWinner__inner">
            <p class="garage-page__theWinner__text"></p>
            <button class="garage-page__theWinner__btn">ok</button>
          </div>
        </div>
    `;

  createGarage();
};

export default createGaragePage;
