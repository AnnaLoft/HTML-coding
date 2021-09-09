import createScore from './create-score';
import sortHandlers from './sorting/sortHandlers';
import ScorePagination from './scorePagination/score-pagination';
import pagesSwither from '../../../common/pages-switcher';

const createWinnersPage = (): void => {
  const winnersPage: HTMLElement = document.querySelector('.winners-page');

  winnersPage.innerHTML = `
      <div class="winners-page__count"></div>
      <div class="winners-page__head">
        <p class="winners-page__head__inner winners-page__head__number">Number</p>
        <p class="winners-page__head__inner winners-page__head__car">Car</p>
        <p class="winners-page__head__inner winners-page__head__id">Id</p>
        <p class="winners-page__head__inner winners-page__head__name">Name</p>
        <p class="winners-page__head__inner winners-page__head__wins">Wins</p>
        <p class="winners-page__head__inner winners-page__head__best-time">Best-time(sec)</p>
      </div> 
      <div class="winners-page__winners"></div>
      <div class="winners-page__pagination">
        <button class="winners-page__pagination__button winners-page__pagination__button__prev">prev</button>
        <p class="winners-page__pagination__pageInfo">page 1</p>
        <button class="winners-page__pagination__button winners-page__pagination__button__next">next</button>
      </div> 
    `;

  createScore();
  sortHandlers();
  ScorePagination();
  pagesSwither();
};

export default createWinnersPage;
