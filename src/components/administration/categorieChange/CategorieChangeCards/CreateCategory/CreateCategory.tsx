import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import s from './CreateCategory.module.css'
import { useEffect, useReducer } from 'react';
import { setCategoryThunk } from "../../../../../redux/categories-reducer";

const CreateCategory = ({ user }: any) => {

  const cleatCategory = {
    _id: '-',
    CategoryData: {
      name: '-',
      img: '-',
    },
    userId: user._id
  }

  let categoryImagSrc: string = '';
  try { categoryImagSrc = atob(cleatCategory.CategoryData.img) } catch
  { categoryImagSrc = cleatCategory.CategoryData.img }

  const dispatch = useDispatch()
  const newCategory = JSON.parse(JSON.stringify(cleatCategory))

  useEffect(() => {
    const updateCategoryBtnEl: HTMLElement = document.querySelector(`.${s.updateCategoryBtn}${cleatCategory.CategoryData.name.split(' ').join('')}`)!
    const cacelBtnEl: HTMLElement = document.querySelector(`.${s.change__cancel}${cleatCategory.CategoryData.name.split(' ').join('')}`)!
    const nameInpEl: HTMLInputElement = document.querySelector(`.nameInp${cleatCategory.CategoryData.name.split(' ').join('')}`)!
    const imgInpEl: HTMLInputElement = document.querySelector(`.imgInp${cleatCategory.CategoryData.name.split(' ').join('')}`)!
    const createCatBtnEl: HTMLElement = document.querySelector(`.${s.change__Create}${cleatCategory.CategoryData.name.split(' ').join('')}`)!


    const updateWordBtnElHandler = (e: any) => {
      e.target.parentNode.parentNode.classList.add(`${s.inChange}`)

    }
    const cacelBtnElHandler = (e: any) => {
      e.target.parentNode.parentNode.parentNode.classList.remove(`${s.inChange}`)
    }

    const nameInpElHandler = (e: any) => {
      newCategory.CategoryData.name = e.target.value
     

    }

    const imgInpElHandler = () => {
      const file = imgInpEl.files![0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newCategory.CategoryData.img = reader.result;
       
      }
    }

    const createCatBtnElHandler = (e: any) => {
      newCategory._id = `${user._id}_${newCategory.CategoryData.name}`
      dispatch(setCategoryThunk(newCategory))
      e.target.parentNode.parentNode.parentNode.classList.remove(`${s.inChange}`)
    }

    updateCategoryBtnEl.addEventListener('click', updateWordBtnElHandler)
    cacelBtnEl.addEventListener('click', cacelBtnElHandler)
    nameInpEl.addEventListener('change', nameInpElHandler)
    imgInpEl.addEventListener('change', imgInpElHandler)
    createCatBtnEl.addEventListener('click', createCatBtnElHandler)
    return () => {
      updateCategoryBtnEl.removeEventListener('click', updateWordBtnElHandler)
      cacelBtnEl.removeEventListener('click', cacelBtnElHandler)
      nameInpEl.removeEventListener('change', nameInpElHandler)
      imgInpEl.removeEventListener('change', imgInpElHandler)
      createCatBtnEl.removeEventListener('click', createCatBtnElHandler)
    }
  })
  
  return (
    <div className={s.categoryCard}>
      <div className={s.cardBtns}>
        <img className={`${s.updateCategoryBtn} ${s.pic__add} ${s.updateCategoryBtn}${cleatCategory.CategoryData.name.split(' ').join('')}`} src='/images/add.png'></img>
      </div>

      <div className={s.categoryCardChanging}>
        <div className={s.change__name}>
          <input placeholder={`Type new name`} className={`nameInp${cleatCategory.CategoryData.name.split(' ').join('')}`} type="text" name="" />
        </div>
        <div className={s.change__img}>
        <div className={s.pic_container}><img className={s.pic__upload} src='/images/upload.png'></img></div>
          <label htmlFor={`imgInp${cleatCategory.CategoryData.name.split(' ').join('')}`}>Upload cover</label>
          <input className={`imgInp${cleatCategory.CategoryData.name.split(' ').join('')}`} id={`imgInp${cleatCategory.CategoryData.name.split(' ').join('')}`} type="file" />
        </div>
        <div className={s.change__btns}>
          <img  className={`${s.change__cancel} ${s.pic__cancel} ${s.change__cancel}${cleatCategory.CategoryData.name.split(' ').join('')}`}src='/images/cancel.png'>
          </img>
          <img className={`${s.change__Create} ${s.pic__save} ${s.change__Create}${cleatCategory.CategoryData.name.split(' ').join('')}`} src='/images/submit.png'>
          </img>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory