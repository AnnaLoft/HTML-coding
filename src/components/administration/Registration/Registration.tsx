import React, { useEffect, useState } from "react"
import s from './Registration.module.css'
import { NavLink, Redirect } from 'react-router-dom';
import useFormChange from "../../commOn/hoocks/changeValue";
import LoginApi from "../../API/loginApi/loginApi";
import { useHistory } from 'react-router-dom';
import initState from "../../../store/initState";
import initApi from "../../API/initApi/initApi";
import { setUserThunk } from "../../../redux/user-reducer";
import { useDispatch } from 'react-redux';

const Registration = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  let loginInputEl: HTMLInputElement,
    passwordInputEl: HTMLInputElement,
    rePasswordInputEl: HTMLInputElement,
    validateInfoEl: HTMLElement
  const login = useFormChange('')
  const password = useFormChange('')
  const rePassword = useFormChange('')

  const registrateBtnElHandler = () => {
    if (password.value !== rePassword.value) {
      validateInfoEl.innerHTML = 'Password and password confirmation must match!'
      rePasswordInputEl.style.backgroundColor = '#ffb5b5'
      return
    } else if (!login.value) {
      loginInputEl.style.backgroundColor = '#ffb5b5'
      validateInfoEl.innerHTML = 'Username must be entered'
      return
    } else if (!password.value) {
      passwordInputEl.style.backgroundColor = '#ffb5b5'
      validateInfoEl.innerHTML = 'Password must be entered'
      return
    } else {
      const loginData = {
        _id: login.value,
        password: password.value
      }
      LoginApi.postLogin(loginData).then((res) => {
        if (res === 400) {
          validateInfoEl.innerHTML = 'We already know a user with this nickname. <br> Choose a new one!'
          return
        } else {
          localStorage.setItem('user', login.value) //
          login.onChange('')
          password.onChange('')
          rePassword.onChange('')
          validateInfoEl.innerHTML = ''
          initState.words.forEach((word: any) => initApi.initPostWord(word));
          initState.categories.forEach((category: any) => initApi.initPostCategory(category))
          setTimeout(() => {
            dispatch(setUserThunk(loginData))
            history.push('/');
          }, 1500)

        }
      })
    }

  }

  useEffect(() => {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.${s.inputs} input`)
    loginInputEl = document.querySelector('#loginName')!
    passwordInputEl = document.querySelector(`#loginPassword`)!
    rePasswordInputEl = document.querySelector(`#loginRePassword`)!
    validateInfoEl = document.querySelector(`.${s.validateInfo}`)!

    const resetBackColor = () => inputs.forEach((input) => {
      input.style.backgroundColor = '#fffffc'
      validateInfoEl.innerHTML = ''
    })
    inputs.forEach((input) => input.addEventListener('focusin', resetBackColor))
    return () => { inputs.forEach((input) => input.removeEventListener('focusin', resetBackColor)) }
  })


  return (
    <div className={s.login}>
      <div className={s.login__inner}>
        <div className={s.inputs__block}>
          <div className={s.validateInfo}></div>
          <div className={`${s.name__inputs} ${s.inputs}`}>
          <label className={s.form__label} htmlFor="loginName">Username:</label>
            <input type="text" id={`loginName`} {...login} />
           
          </div>
          <div className={`${s.password__inputs} ${s.inputs}`}>
          <label className={s.form__label} htmlFor="loginPassword">Password:</label>
            <input type="password" id={`loginPassword`} {...password} />
           
          </div>
          <div className={`${s.RePassword__inputs} ${s.inputs}`}>
          <label className={s.form__label} htmlFor="loginRePassword">Confirm password:</label>
            <input type="password" id={`loginRePassword`} {...rePassword} />
          
          </div>
        </div>
        <div className={s.buttons__block}>
          <NavLink to='/Login'>
            <img className={`${s.button} ${s.pic__cancel} ${s.cancelBtn}`} src='/images/cancel.png' ></img>
          </NavLink>
          <NavLink to={`/Registration`}>
            <img className={`${s.button}  ${s.pic__save} ${s.registrateBtn}`}  onClick={registrateBtnElHandler} src='/images/submit.png'></img>
          </NavLink>
        </div>

      </div>
    </div >
  )
}

export default Registration