import { NavLink } from 'react-router-dom';
import React, {
  useEffect, useState,
} from 'react';
import s from './navPanel.module.css';
import { DataT } from '../commOn/types/commonTypes';
import countHeightOfDoc from '../commOn/countHeightOfDoc';
import WordsApi from '../API/wordsApi/wordsApi';

type PropsT = {
  categories: any
  burgerClass: string
  burgerClassActive: string
  setDbWords: any
  dbWords: any
  pathname: string
};

const NavPanel: React.FC<PropsT> = ({ setDbWords, dbWords, categories, burgerClass, burgerClassActive, pathname }: PropsT) => {
  const [navPanelHiden, setNavPanelHiden] = useState(true);



  const category = categories.map((category: any) => (
    <NavLink className={s.nav_link} key={category._id} to={`/${category.CategoryData.name}`}>
      <div>
        {category.CategoryData.name}
      </div>
    </NavLink>
  ));

  useEffect(() => {
    const ContentPartEl: HTMLElement = document.querySelector(`.App__content`)!
    const burger: HTMLElement = document.querySelector(`.${burgerClass}`)!;
    const navPanelEl: HTMLElement = document.querySelector(`.${s.navPanel}`)!;

    const body: HTMLElement = document.querySelector('body')!;
    const hideNavPanel = () => {
      navPanelEl?.classList.remove(`${s.shown}`);
      burger.classList.remove(`${burgerClassActive}`);
      setNavPanelHiden(true);
    };
  
      if (navPanelEl.clientHeight > ContentPartEl.clientHeight) { ContentPartEl.style.minHeight = `${navPanelEl.clientHeight}px`; } else {
        ContentPartEl.style.height = ' '
      }
  

    const burgerHandler = () => {
      if (navPanelHiden) {
    
        navPanelEl?.classList.add(`${s.shown}`);
        burger.classList.add(`${burgerClassActive}`);
        setNavPanelHiden(false);
      } else {
        navPanelEl?.classList.remove(`${s.shown}`);
        burger.classList.remove(`${burgerClassActive}`);
        setNavPanelHiden(true);
      }
    };
    const navPanelElLeaveHandler = () => {
      hideNavPanel();
    };
    const bodyHandler = (e: MouseEvent) => {
      if (e.target !== navPanelEl && e.target !== burger) {
        hideNavPanel();
      }
    };

    burger?.addEventListener('click', burgerHandler);
    navPanelEl?.addEventListener('mouseleave', navPanelElLeaveHandler);
    body.addEventListener('click', bodyHandler);
    return () => {
      burger?.removeEventListener('click', burgerHandler);
      navPanelEl?.removeEventListener('mouseleave', navPanelElLeaveHandler);
      body.removeEventListener('click', bodyHandler);
    };
  });

  useEffect(() => {
    const navLinkEls: NodeListOf<HTMLElement> = document.querySelectorAll(`.${s.nav_link}`)!;
    navLinkEls.forEach((e) => { 
      const link = ((e as HTMLElement).firstChild as HTMLElement);
      link.style.transform = '';
      if (Array.from(e.classList).includes('active')) {
        link.style.transform = 'matrix(1.50,0.00,0.00,1.50,0,0)';
      }
    });

    const navPanelElHandler = (e: MouseEvent) => {
      navLinkEls.forEach((el) => {
        const link = ((el as HTMLElement).firstChild as HTMLElement);
        link.style.transform = '';
      });
      ((e.currentTarget as HTMLElement).firstChild as HTMLElement).style.transform = 'matrix(1.30,0.00,0.00,1.30,0,0)';
    };

    navLinkEls.forEach((link) => link.addEventListener('click', navPanelElHandler));
    return () => navLinkEls.forEach((link) => link.removeEventListener('click', navPanelElHandler));
  });

  const onStatisticsClick = () => {
    WordsApi.getAllWords().then((res) => {
      setDbWords(res)
    })
  }

  return (
    <div className={s.navPanel}>
      <NavLink className={s.nav_link} to="/HomePage">
        <p>HomePage</p>
      </NavLink>
      {category}
      <NavLink onClick={onStatisticsClick} className={s.nav_link} to="/Statistics">
        <p>Statistics</p>
      </NavLink>
    </div>
  );
};

export default NavPanel;
