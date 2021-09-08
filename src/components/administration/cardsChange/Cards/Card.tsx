import s from './Card.module.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSinleWord } from '../../../../redux/words-reducer';
import { deleteWordThunk } from './../../../../redux/words-reducer';

const Card = ({ word }: any) => {
  let wordImgSrc
  try { wordImgSrc = `../${atob(word.WordData.img)}` } catch
  { wordImgSrc = word.WordData.img }
  const dispatch = useDispatch()
  const newWord = JSON.parse(JSON.stringify(word))

  useEffect(() => {
    const engInput: HTMLInputElement = document.querySelector(`.${s.card__changing_engInp}${word._id}`)!
    const rusInput: HTMLInputElement = document.querySelector(`.${s.card__changing_rusInp}${word._id}`)!
    const imgInput: HTMLInputElement = document.querySelector(`.${s.card__changing_imgInp}${word._id}`)!
    const audioInput: HTMLInputElement = document.querySelector(`.${s.card__changing_soundInp}${word._id}`)!
    const changeBtnEl: HTMLElement = document.querySelector(`.${s.card__changeBtn}${word._id}`)!
    const saveBtnBtnEl: HTMLElement = document.querySelector(`.${s.card__saveBtn}${word._id}`)!
    const deleteCardEl: HTMLElement = document.querySelector(`.${s.deleteIcon}${word._id}`)!
    const listenBtn: HTMLElement = document.querySelector(`.${s.card_soundNameSrc_listen}${word._id}`)!
   
    listenBtn.style.cursor = 'pointer'


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
     
      dispatch(updateSinleWord(newWord));
      card.classList.remove(`${s.inChange}`)
    }

    const deleteCardElHandler = () => {
     
      dispatch(deleteWordThunk(word))
    }

    const listenBtnHandler = () => {
      let wordSoundSrc
      try { wordSoundSrc = `../${atob(newWord.WordData.sound)}` } catch
      { wordSoundSrc = word.WordData.sound }
      const audio: HTMLAudioElement = new Audio(wordSoundSrc);
      audio.play()

    }

    engInput.addEventListener('change', engHandler)
    rusInput.addEventListener('change', rusHandler)
    imgInput.addEventListener('change', imgHandler)
    audioInput.addEventListener('change', soundHandler)
    changeBtnEl.addEventListener('click', changeBtnHandler)
    saveBtnBtnEl.addEventListener('click', saveBtnHandler)
    deleteCardEl.addEventListener('click', deleteCardElHandler)
    listenBtn.addEventListener('click', listenBtnHandler)
    return () => {
      engInput.removeEventListener('change', engHandler)
      rusInput.removeEventListener('change', rusHandler)
      imgInput.removeEventListener('change', imgHandler)
      audioInput.removeEventListener('change', soundHandler)
      changeBtnEl.removeEventListener('click', changeBtnHandler)
      saveBtnBtnEl.removeEventListener('click', saveBtnHandler)
      deleteCardEl.removeEventListener('click', deleteCardElHandler)
      listenBtn.removeEventListener('click', listenBtnHandler)
    }
  })

  return (
    <div className={s.card} key={word._id}>
      <div className={s.card_front} >
        <div className={s.card_Info} >
          <img className={`${s.deleteIcon} ${s.deleteIcon}${word._id}`} src=".././images/delete-cross.png" alt="" />
          <div className={s.card_nameBlock}>
            <img className={s.card_name} src=".././images/eng.png"></img>
            <p className={s.card_nameSrc} >{word.WordData.eng}</p>
            <img className={`${s.card_soundNameSrc_listen} ${s.card_soundNameSrc_listen}${word._id}`} src=".././images/listen-check.png"></img>
          </div>
          <div className={s.card_translateBlock}>
            <img className={s.card_translate} src=".././images/ru.png"></img>
            <p className={s.card_translateSrc} >{word.WordData.rus}</p>
          </div>
          
          <div className={s.card__imageBlock}>
            <div className={s.card__image}>
              <img className={s.card__image_pic} src=".././images/pictures.png"></img>
              <img className={s.card__image_img} src={wordImgSrc} alt="" />
            </div>
          </div>

          <div className={s.card__changing}>
            <input placeholder={'Type new word'} className={`${s.card__changing_engInp} ${s.card__changing_engInp}${word._id}`} type="text" />
            <input placeholder={'Type new translate'} className={`${s.card__changing_rusInp} ${s.card__changing_rusInp}${word._id}`} type="text" />
            <div className={s.card__changing_sound}>
              <img className={s.pic_upload} src='/images/upload.png'></img>
              <label htmlFor={`${word._id}SoundIn`}>Upload picture</label>
              <input id={`${word._id}SoundIn`} className={`${s.card__changing_soundInp} ${s.card__changing_soundInp}${word._id}`} type="file" />
            </div>
            <div className={s.card__changing_img}>
            <img className={s.pic_upload} src='/images/listen.png'></img>
              <label htmlFor={`${word._id}ImgIn`}>Upload sound</label>
              <input id={`${word._id}ImgIn`} className={`${s.card__changing_imgInp} ${s.card__changing_imgInp}${word._id}`} type="file" />
            </div>
          </div>

          <div className={s.card__btns}>
            <img  className={`${s.card__changeBtn} ${s.card__settings} ${s.card__changeBtn}${word._id}`} src='/images/settings.png'>
             
            </img>
            <img  className={`${s.card__saveBtn} ${s.card__save} ${s.card__saveBtn}${word._id}`} src='/images/save.png'>
             
            </img>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Card