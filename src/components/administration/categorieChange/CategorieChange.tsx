import React, { useReducer } from "react"
import s from './CategorieChange.module.css'
import { NavLink, useHistory } from 'react-router-dom';
import CardsChange from './../cardsChange/CardsChange';
import CategorieChangeCards from './CategorieChangeCards/CategorieChangeCards';
import CreateCategory from './CategorieChangeCards/CreateCategory/CreateCategory';
import { useSelector } from "react-redux";

const CategorieChange = ({ wordsData }: any) => {
  const history = useHistory();
  if (Number(localStorage.getItem('user')) < 0 && !Number.isNaN(localStorage.getItem('user'))) {
    history.push('/');
  }

  const user: any = Object.values(useSelector((store: any) => store.users))[0]
  const categories: any = Object.values(useSelector((store: any) => store.categories))


  const category = categories.map((category: any) => {

    const filtredWords = wordsData.filter((word: any) => word.WordData.category === category._id.split('_')[1])


    return (
      <CategorieChangeCards user={user} key={category._id} category={category} wordsData={filtredWords} />
    )
  });

  return (
    <div className={s.categories}>
      {category}
      <CreateCategory user={user} />
    </div>
  );

}

export default CategorieChange