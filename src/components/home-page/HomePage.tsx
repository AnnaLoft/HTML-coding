import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import CategoryCard from './CategoryCard/CategoryCard';
import { SetsT } from '../commOn/types/commonTypes';
import { useEffect } from 'react';
import CategoriesApi from './../API/categoriesApi/categoriesApi';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from '../../redux/categories-reducer';

type ProtoT = {
  GameMode: boolean
  categories: any
};

const HomePage: React.FC<ProtoT> = ({ GameMode, categories }: ProtoT) => {

  if (categories.length === 0) {
    return (
      <div className={s.preloader}>
      <div className={s.preloader__row}>
        <div className={s.preloader__item}></div>
        <div className={s.preloader__item}></div>
      </div>
    </div>
    )
  } else {

    const category = categories.map((item: any) => (
      <NavLink to={item.CategoryData.name} key={item._id}>
        <CategoryCard categoryName={item.CategoryData.name} categoryImage={item.CategoryData.img} GameMode={GameMode} />
      </NavLink>
    ));

    return (
      <div className={s.categories}>
        {category}
      </div>
    );
  }
};

export default HomePage;
