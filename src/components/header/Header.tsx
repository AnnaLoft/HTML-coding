import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import NavPanel from '../nav-panel/navPanel';
import { DataT } from '../commOn/types/commonTypes';
import { useDispatch } from 'react-redux';
import { setUserThunk } from '../../redux/user-reducer';
import { randomIp } from '../commOn/initLocalStorageLogin';

type PropsT = {
  categories: any
  setGameMode: React.Dispatch<React.SetStateAction<boolean>>
  dbWords: any
  setDbWords: any
};

const Header: React.FC<PropsT> = ({ dbWords, setDbWords, categories, setGameMode }: PropsT) => {
  const dispatch = useDispatch()
  const location = useLocation();
  useEffect(() => {
    const headerEl: HTMLElement = document.querySelector(`.${s.header}`)!;
    if (location.pathname === '/Statistics') {
      headerEl.style.minWidth = '600px';
    } else {
      headerEl.style.minWidth = '0px';
    }
  }, [location]);

  useEffect(() => {
    const GameModeSwitcher: HTMLInputElement = document.querySelector(`.${s.switcher}`)!;
    const GameModeChangeHandler = () => setGameMode(GameModeSwitcher.checked);
    const SettingsBtnEl: HTMLElement = document.querySelector(`.${s.toSettingsBtn}`)!
    if (Number(localStorage.getItem('user')) < 0 && !Number.isNaN(localStorage.getItem('user'))) { SettingsBtnEl.style.display = 'none' } else { SettingsBtnEl.style.display = '' }
    GameModeSwitcher.addEventListener('change', GameModeChangeHandler);
    return () => GameModeSwitcher.removeEventListener('change', GameModeChangeHandler);
  });

  const logOutHandler = () => {
    dispatch(setUserThunk({ [`${randomIp}`]: `${randomIp}` }))
    localStorage.setItem('user', `${randomIp}`)
  }

  const LoginOrLogOut = () => {

    if ((Number(localStorage.getItem('user')) < 0 && !Number.isNaN(localStorage.getItem('user')))) {
      return (
        <NavLink className={s.loginLink} to='/Login'>
          <img className={`${s.panel__pic} ${s.panel__pic_log}`} src='/images/log-in.png'></img>
        </NavLink>
      )
    } else {
      return (
        <NavLink onClick={logOutHandler} className={s.logOutLink} to='/'>
          <img className={`${s.panel__pic} ${s.panel__pic_log}`} src='/images/logout.png'></img>
        </NavLink>
      )
    }
  }


  return (
    <div className={s.header}>
      <NavPanel
        categories={categories}
        burgerClass={s.menu__burger}
        burgerClassActive={s.menu__burger_active}
        setDbWords={setDbWords}
        dbWords={dbWords}
        pathname={location.pathname}
      />
      <div className={s.header__inner}>
        <div className={s.menu__burger}><span /></div>
        <p className={s.name}>English for kids</p>
        <div className={s.switcherAndLogin}>
          <NavLink className={s.toSettingsBtn} to='/Settings'>
            <img className={`${s.panel__pic} ${s.panel__pic_setting}`} src='/images/setting.png'></img>
          </NavLink>
          {LoginOrLogOut()}
          <div className={s.switcher__block}>
            <input className={s.switcher} id="switch1" type="checkbox" />
            <label className={s.switcher__for} htmlFor="switch1"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
