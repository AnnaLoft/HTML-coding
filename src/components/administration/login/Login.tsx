import React, { useEffect, useState } from "react"
import s from './Login.module.css'
import { NavLink, useHistory } from 'react-router-dom';
import useFormChange from "../../commOn/hoocks/changeValue";
import LoginApi from "../../API/loginApi/loginApi";
import { useDispatch } from 'react-redux';
import { setUserThunk } from "../../../redux/user-reducer";


const Login = ({ setUser }: any) => {
  const dispatch = useDispatch()
  const history = useHistory();
  let loginInputEl: HTMLInputElement,
    passwordInputEl: HTMLInputElement,
    validateInfoEl: HTMLElement,
    loginBlockEl: HTMLElement

  const login = useFormChange('')
  const password = useFormChange('')

  const loginBtnElHandler = () => {
    if (!login.value) {
      loginInputEl.style.backgroundColor = '#ffadad'
      validateInfoEl.innerHTML = 'Username must be entered'
      return
    } else if (!password.value) {
      passwordInputEl.style.backgroundColor = '#ffadad'
      validateInfoEl.innerHTML = 'Password must be entered'
      return
    } else {
      LoginApi.getSingleLogin(login.value).then((res) => {
        if (res === null) {
          validateInfoEl.innerHTML = 'Hmm, looks like we have not met you yet! <br><br> You should to register first.'
          loginInputEl.style.backgroundColor = '#ffadad'
          return
        } else if (res) {
          if (password.value !== res.password) {
            validateInfoEl.innerHTML = 'Incorrect password'
            passwordInputEl.style.backgroundColor = '#ffb5b5'
            return
          } else {
            localStorage.setItem('user', login.value)
            login.onChange('')
            password.onChange('')
            validateInfoEl.style.color = '#f3fff0'
            validateInfoEl.style.fontSize = '22px'
            validateInfoEl.innerHTML = `Glad to see you, ${res._id}!`
            loginBlockEl.style.pointerEvents = 'none'
            setTimeout(() => {
              history.push('/');
              validateInfoEl.style.color = ''
              validateInfoEl.style.fontSize = ''
              dispatch(setUserThunk(res))
            }, 1500)
          }
        }
      })
    }

  }

  useEffect(() => {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.${s.inputs} input`)
    loginInputEl = document.querySelector('#loginName')!
    passwordInputEl = document.querySelector(`#loginPassword`)!
    validateInfoEl = document.querySelector(`.${s.validateInfo}`)!
    loginBlockEl = document.querySelector(`.${s.login}`)!

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
            <input className={s.form__input} type="text" id={`loginName`} {...login} />
            
          </div>
          <div className={`${s.password__inputs} ${s.inputs}`}>
          <label className={s.form__label} htmlFor="loginPassword">Password:</label>
            <input className={s.form__input} type="password" id={`loginPassword`} {...password} />
           
          </div>
        </div>
        <div className={s.buttons__block}>
          <NavLink to='/'>
            <img className={`${s.button} ${s.pic__cancel} ${s.cancelBtn}`} src='/images/cancel.png'></img>
          </NavLink>
          <NavLink to={`/Registration`}>
            <img className={`${s.button} ${s.pic__add} ${s.registrateBtn}`}  src='/images/add.png'></img>
          </NavLink>
          <img className={`${s.button} ${s.pic__save} ${s.loginBtn}`} onClick={loginBtnElHandler} src='/images/submit.png'></img>
        </div>

      </div>
    </div>
  )
}

export default Login