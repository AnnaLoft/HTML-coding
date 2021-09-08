import React, { useReducer, useState } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import Header from './components/header/Header';
import data from './store/test.json';
import TrainCardsPage from './components/TrainCardsPage/TrainCardsPage';
import GameCardsPage from './components/GameCardsPage/GameCardsPage';
import Statistics from './components/statistics/Statistics';
import Repeat from './components/repeat/Repeat';
import Footer from './components/footer/Footer';
import Login from './components/administration/login/Login';
import CategorieChange from './components/administration/categorieChange/CategorieChange';
import Registration from './components/administration/Registration/Registration';
import initLocalStorageLogin from './components/commOn/initLocalStorageLogin';
import { useEffect } from 'react';
import initApi from './components/API/initApi/initApi';
import initState from './store/initState';
import { getAllCategoriesThunk, initialCategoriesState } from './redux/categories-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWordsThunk } from './redux/words-reducer';
import { setUserThunk } from './redux/user-reducer';
import CardsChange from './components/administration/cardsChange/CardsChange';


function App() {
  initLocalStorageLogin()
  let dispatch = useDispatch()
  const user = useSelector((store: any) => store.users)
  

  if (!(localStorage.getItem('isInited')) { } else {
   
    initState.words.forEach((word: any) => initApi.initPostWord(word));
    initState.categories.forEach((category: any) => initApi.initPostCategory(category))
    dispatch(setUserThunk({ _id: localStorage.getItem('user'), password: '***' }))


    localStorage.setItem('isInited', 'true')
  }
  
  const categories = Object.values(useSelector((store: any) => store.categories))
  const wordsData: any = Object.values(useSelector((store: any) => store.words))


  useEffect(() => {
    dispatch(getAllCategoriesThunk())
    dispatch(getAllWordsThunk())
  }, [user])


  const [GameMode, setGameMode] = useState(false);
  const [dbWords, setDbWords] = useState([])

  const trainRoutings = categories.map((category: any) => <Route path={`/${category.CategoryData.name}`} key={category._id} render={() => <TrainCardsPage wordsData={wordsData} categoryName={category.CategoryData.name} wrongWords={null} />} />);
  const gameRoutings = categories.map((category: any) => <Route path={`/${category.CategoryData.name}`} key={category._id} render={() => <GameCardsPage categoryName={category.CategoryData.name} wrongWords={null} />} />);

  window.onunload = () => {
  }

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header dbWords={dbWords} setDbWords={setDbWords} categories={categories} setGameMode={setGameMode} />
        <div className="App__content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/HomePage" />} />
            <Route path="/HomePage" render={() => <HomePage categories={categories} GameMode={GameMode} />} />
            {GameMode ? gameRoutings : trainRoutings}
            <Route path="/Statistics" render={() => <Statistics dbWords={dbWords} setDbWords={setDbWords} categories={categories} />} />
            <Route path="/Repeat" render={() => <Repeat gameMode={GameMode} />} />
            <Route path="/Login" render={() => <Login />} />
            <Route path="/Registration" render={() => <Registration />} />
            <Route path="/Settings" render={() => <CategorieChange user={user} wordsData={wordsData} />} />
            <Route path="/WordsChange/:category?" render={() => <CardsChange user={user} />} />
            <Route exact path="*" render={() => <div>404 not found</div>} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
