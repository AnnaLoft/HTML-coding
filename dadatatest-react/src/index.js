import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './App.css'

import Header from './components/Header';
import Article from './components/Article';
import Form from './components/Form';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>

  <div className="content-container">
    <div className="main-wrapper">
<Header></Header>
<Article></Article>
<Form></Form>


    </div>
    </div></Provider>

);


