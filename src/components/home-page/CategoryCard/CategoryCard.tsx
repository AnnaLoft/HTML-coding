import React from 'react';
import { CategoryDataT } from '../../commOn/types/commonTypes';
import s from './CategoryCard.module.css';

type PropsT = {
  categoryName: string
  categoryImage: string
  GameMode: boolean
};

const CategoryCard: React.FC<PropsT> = ({ categoryName, categoryImage, GameMode }: PropsT) => {
  let categoryImagSrc: string = '';
  try { categoryImagSrc = atob(categoryImage) } catch
  { categoryImagSrc = categoryImage }

  const CategoryCardJsx = GameMode
    ? (
      <div className={`${s.categoryCard} ${s.inGameMode}`}>
        <img className={s.categoryCard__image} src={categoryImagSrc} alt="" />
        <p className={s.categoryCard_name}>{categoryName}</p>
      </div>
    )
    : (
      <div className={`${s.categoryCard}`}>
        <img className={s.categoryCard__image} src={categoryImagSrc} alt="" />
        <p className={s.categoryCard_name}>{categoryName}</p>
      </div>
    );
  return CategoryCardJsx;
};

export default CategoryCard;
