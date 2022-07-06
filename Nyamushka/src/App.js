import React, {useState} from 'react';
import Header from './components/header/Header';
import Container from './components/container/Container';
import SellBtn from './components/button/SellOutBtn';
import './styles/Reset.css';
import './styles/App.css';

class Item {
  constructor(cardName, productName, productProps, amount, giftsAmount, gifts, addInfo, size, selectedText) {
      this.cardName = cardName;
      this.productName = productName;
      this.productProps = productProps;
      this.amount = amount;
      this.giftsAmount = giftsAmount;
      this.gifts = gifts;
      this.addInfo = addInfo
      this.size = size;
      this.selectedText = selectedText;
      this.soldOut = false;
      this.selected = false;
  }
};

const InitialState = [
  new Item('Сказочное заморское яство', 'Нямушка', 'c фуа-гра', '10', '', 'мышь в подарок', '', '0,5', 'Печень утки разварная с артишоками.'),
  new Item('Сказочное заморское яство', 'Нямушка', 'c рыбой', '40', '2', 'мыши в подарок', '', '2', 'Головы щучьи с чесноком да свежайшая сёмгушка.'),
  new Item('Сказочное заморское яство', 'Нямушка', 'c курой', '100', '5', 'мышей в подарок', 'заказчик доволен', '5', 'Филе из цыплят с трюфелями в бульоне.')
]

function App() {

  const [appState, setAppState] = useState(InitialState);
  return (
    <div className="App">
      <Header/>
      <Container cards={appState}/>
      <SellBtn appState={appState} sellOut={setAppState}/>
     
        
      
      
      
    </div>
  );
}

export default App;
