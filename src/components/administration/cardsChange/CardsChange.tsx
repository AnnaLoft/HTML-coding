import React, { useState } from "react"
import { useParams } from "react-router";
import s from './CardsChange.module.css'
import tryToConvertB64src from "../../commOn/tryToConvertB64src";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateSinleWord } from "../../../redux/words-reducer";
import Card from './Cards/Card';
import CreateCard from './Cards/CreateCard/CreateCard';
import { useHistory } from "react-router-dom";

const CardsChange = ({ user }: any) => {
  const history = useHistory();
  if (Number(localStorage.getItem('user')) < 0 && !Number.isNaN(localStorage.getItem('user'))) {
    history.push('/');
  }


  const wordsData: any = Object.values(useSelector((store: any) => store.words))
  const params: any = useParams()
  const filtredWordsData = wordsData.filter((word: any) => word.WordData.category === params.category)


  const HtmlCardsData = filtredWordsData.map((word: any) => <Card key={word._id} word={word} />);


  return (
    <div className={s.cards}>
      {HtmlCardsData}
      <CreateCard user={Object.values(user)[0]} category={params.category} />
    </div>
  )
}

export default CardsChange