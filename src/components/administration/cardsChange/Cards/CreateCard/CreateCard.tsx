import { setWordThunk, updateSinleWord } from '../../../../../redux/words-reducer'
import s from './CreateCard.module.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CreateCard = ({ user, category }: any) => {

  
  const clearWord = {
    _id: '-',
    WordData: {
      eng: '-',
      rus: '-',
      img: '-',
      sound: '-',
      category: category,
      Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 }
    },
    userId: user._id
  }


  let wordImgSrc
  try { wordImgSrc = `../${atob(clearWord.WordData.img)}` } catch
  { wordImgSrc = clearWord.WordData.img }
  const dispatch = useDispatch()

  const newWord = JSON.parse(JSON.stringify(clearWord))

  useEffect(() => {
    const engInput: HTMLInputElement = document.querySelector(`.${s.card__changing_engInp}${clearWord._id}`)!
    const rusInput: HTMLInputElement = document.querySelector(`.${s.card__changing_rusInp}${clearWord._id}`)!
    const imgInput: HTMLInputElement = document.querySelector(`.${s.card__changing_imgInp}${clearWord._id}`)!
    const audioInput: HTMLInputElement = document.querySelector(`.${s.card__changing_soundInp}${clearWord._id}`)!
    const changeBtnEl: HTMLElement = document.querySelector(`.${s.card__changeBtn}${clearWord._id}`)!
    const saveBtnBtnEl: HTMLElement = document.querySelector(`.${s.card__saveBtn}${clearWord._id}`)!

    const engHandler = (e: any) => {
      newWord.WordData.eng = e.target.value
    }

    const rusHandler = (e: any) => {
      newWord.WordData.rus = e.target.value
    }

    const imgHandler = (e: any) => {
      const file = imgInput.files![0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newWord.WordData.img = reader.result;
      
      }
    }

    const soundHandler = (e: any) => {
      const file = audioInput.files![0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newWord.WordData.sound = reader.result;
      }
    }

    const changeBtnHandler = (e: any) => {
      const card: HTMLElement = e.target.parentNode.parentNode.parentNode.parentNode!
      card.classList.add(`${s.inChange}`)
    }

    const saveBtnHandler = (e: any) => {
      const card: HTMLElement = e.target.parentNode.parentNode.parentNode.parentNode!
     
      newWord._id = `${newWord.userId}_${newWord.WordData.eng}`
      dispatch(setWordThunk(newWord));
      card.classList.remove(`${s.inChange}`)
    }

    engInput.addEventListener('change', engHandler)
    rusInput.addEventListener('change', rusHandler)
    imgInput.addEventListener('change', imgHandler)
    audioInput.addEventListener('change', soundHandler)
    changeBtnEl.addEventListener('click', changeBtnHandler)
    saveBtnBtnEl.addEventListener('click', saveBtnHandler)

    return () => {
      engInput.removeEventListener('change', engHandler)
      rusInput.removeEventListener('change', rusHandler)
      imgInput.removeEventListener('change', imgHandler)
      audioInput.removeEventListener('change', soundHandler)
      changeBtnEl.removeEventListener('click', changeBtnHandler)
      saveBtnBtnEl.removeEventListener('click', saveBtnHandler)
    }
  })

  return (
    <div className={s.card} key={clearWord._id}>
      {/* eslint-disable-next-line */}
      <div className={s.card_front} >
        <div className={s.card_Info} >


          <div className={s.card__changing}>
            <input placeholder={'Type new word'} className={`${s.card__changing_engInp} ${s.card__changing_engInp}${clearWord._id}`} type="text" />
            <input placeholder={'Type new translate'} className={`${s.card__changing_rusInp} ${s.card__changing_rusInp}${clearWord._id}`} type="text" />
            <div className={s.card__changing_sound}>
            <img className={s.pic_upload} src='/images/upload.png'></img>
              <label htmlFor={`${clearWord._id}SoundIn`}>Upload picture</label>
              <input id={`${clearWord._id}SoundIn`} className={`${s.card__changing_soundInp} ${s.card__changing_soundInp}${clearWord._id}`} type="file" />
            </div>
            <div className={s.card__changing_img}>
            <img className={s.pic_upload} src='/images/listen.png'></img>
              <label htmlFor={`${clearWord._id}ImgIn`}>Upload sound</label>
              <input id={`${clearWord._id}ImgIn`} className={`${s.card__changing_imgInp} ${s.card__changing_imgInp}${clearWord._id}`} type="file" />
            </div>
          </div>

          <div className={s.card__btns}>
        
            <img className={`${s.card__changeBtn} ${s.card__add} ${s.card__changeBtn}${clearWord._id}`} src=".././images/newword.png">
             
            </img>
            
            <img className={`${s.card__saveBtn} ${s.card__save} ${s.card__saveBtn}${clearWord._id}`} src='/images/save.png'>
             
            </img>
          </div>
        </div>
      </div >
    </div >
  )
}
export default CreateCard