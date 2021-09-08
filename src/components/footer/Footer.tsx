import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from './Footer.module.css';

type PropsT = {
};
const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__content}>
        <a href="https://rs.school/js/">
          <img className={s.logo} src={`./images/rs_school_js.svg`} alt="rs_school_js" />
          <p className={s.year}>'2021</p>
        </a>
        <a  href="https://github.com/AnnaLoft" className={s.link}>Made by AnnaLoft
        </a>
      </div>
    </div>
  )
}


export default Footer;
