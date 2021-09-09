import createHeader from './pages/header/create-header';
import createGaragePage from './pages/garage/create-garage-page';
import pagesSwither from './common/pages-switcher';
import createWinnersPage from './pages/garage/score/create-winners-page';
import createPagesBlocks from './pages/garage/create-pages-blocks';

const init = (): void => {
  createHeader();
  createPagesBlocks();
  createGaragePage();
  createWinnersPage();
  pagesSwither();
};

window.addEventListener('load', init);
