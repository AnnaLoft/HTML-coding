import s from './CategorieChangeCards.module.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategoryThunk, setCategoryThunk, updateCategoryThunk } from '../../../../redux/categories-reducer';

const CategorieChangeCards = ({ category, wordsData }: any) => {
  let categoryImagSrc: string = '';
  try { categoryImagSrc = atob(category.CategoryData.img) } catch
  { categoryImagSrc = category.CategoryData.img }


  const dispatch = useDispatch()
  const newCategory = JSON.parse(JSON.stringify(category))

  useEffect(() => {
    const updateCategoryBtnEl: HTMLElement = document.querySelector(`.${s.updateCategoryBtn}${category.CategoryData.name.split(' ').join('')}`)!
    const cacelBtnEl: HTMLElement = document.querySelector(`.${s.change__cancel}${category.CategoryData.name.split(' ').join('')}`)!
    const nameInpEl: HTMLInputElement = document.querySelector(`.nameInp${category.CategoryData.name.split(' ').join('')}`)!
    const imgInpEl: HTMLInputElement = document.querySelector(`.imgInp${category.CategoryData.name.split(' ').join('')}`)!
    const createCatBtnEl: HTMLElement = document.querySelector(`.${s.change__create}${category.CategoryData.name.split(' ').join('')}`)!
    const deleteCardEl: HTMLElement = document.querySelector(`.${s.deleteIcon}${category.CategoryData.name.split(' ').join('')}`)!
   

    const updateWordBtnElHandler = (e: any) => {
      e.target.parentNode.parentNode.classList.add(`${s.inChange}`)

    }
    const cacelBtnElHandler = (e: any) => {
      e.target.parentNode.parentNode.parentNode.classList.remove(`${s.inChange}`)
    }

    const nameInpElHandler = (e: any) => {
      category.CategoryData.name = e.target.value
      newCategory.CategoryData.name = e.target.value
     

    }

    const imgInpElHandler = () => {
      const file = imgInpEl.files![0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        category.CategoryData.img = reader.result;
        newCategory.CategoryData.img = reader.result;
       
      }
    }

    const createCatBtnElHandler = (e: any) => {
      dispatch(updateCategoryThunk(newCategory))
      e.target.parentNode.parentNode.parentNode.classList.remove(`${s.inChange}`)
    }

    const deleteCardElHandler = () => {
   
      dispatch(deleteCategoryThunk(category))
    }

    updateCategoryBtnEl.addEventListener('click', updateWordBtnElHandler)
    cacelBtnEl.addEventListener('click', cacelBtnElHandler)
    nameInpEl.addEventListener('change', nameInpElHandler)
    imgInpEl.addEventListener('change', imgInpElHandler)
    createCatBtnEl.addEventListener('click', createCatBtnElHandler)
    deleteCardEl.addEventListener('click', deleteCardElHandler)
    return () => {
      updateCategoryBtnEl.removeEventListener('click', updateWordBtnElHandler)
      cacelBtnEl.removeEventListener('click', cacelBtnElHandler)
      nameInpEl.removeEventListener('change', nameInpElHandler)
      imgInpEl.removeEventListener('change', imgInpElHandler)
      createCatBtnEl.removeEventListener('click', createCatBtnElHandler)
      deleteCardEl.removeEventListener('click', deleteCardElHandler)
    }
  })

  return (
    <div className={s.categoryCard}>
      <img className={`${s.deleteIcon} ${s.deleteIcon}${category.CategoryData.name.split(' ').join('')}`} src="./images/delete.png" alt="" />
      <div className={s.categoryCardInfo}>
        <img className={s.categoryCard__image} src={categoryImagSrc} alt="" />
        <p className={s.categoryCard_name}>{category.CategoryData.name}</p>
      </div>
      <div className={s.cardBtns}>
        <button className={`${s.updateCategoryBtn} ${s.updateCategoryBtn}${category.CategoryData.name.split(' ').join('')}`} type={'button'}><p>Update</p></button>
        <NavLink to={'/WordsChange/' + category._id.split('_')[1]}>
          <button className={s.addWorrdBtn} type={'button'}><p>Add&#160;words</p></button>
        </NavLink>
      </div>

      <div className={s.categoryCardChanging}>
        <div className={s.change__name}>
          <input placeholder={`Type new name`} className={`nameInp${category.CategoryData.name.split(' ').join('')}`} type="text" name="" />
        </div>
        <div className={s.change__img}>
        <div className={s.pic_container}><img className={s.pic_upload} src='/images/upload.png'></img></div>
          <label htmlFor={`imgInp${category.CategoryData.name.split(' ').join('')}`}>Upload cover</label>
          
          <input className={`imgInp${category.CategoryData.name.split(' ').join('')}`} id={`imgInp${category.CategoryData.name.split(' ').join('')}`} type="file" />
        </div>
        <div className={s.change__btns}>
         
            <img  className={`${s.change__cancel} ${s.pic__cancel} ${s.change__cancel}${category.CategoryData.name.split(' ').join('')}`} src='/images/cancel.png'></img>
          
            <img className={`${s.change__Create} ${s.pic__save} ${s.change__create}${category.CategoryData.name.split(' ').join('')}`} src='/images/submit.png'></img>
   
        </div>
      </div>
    </div>
  )
}

export default CategorieChangeCards