import React, {useState} from "react";


const SellBtn = ({appState, sellOut}) => {
    const sellEverything = (appState) =>{
        const newState = appState.map(el => Object.assign(el, {soldOut: true, selected: false }));
        sellOut(newState);
    }
    const restock = (appState) =>{
        const newState = appState.map(el => Object.assign(el, {soldOut: false, selected: false }));
        sellOut(newState);
    }
    const [isOff, setIsOff] = useState(true);
return (
    <button className="disable" onClick={() => {isOff ? sellEverything(appState) : restock(appState); setIsOff(!isOff)}}>{ isOff ? 'Распродать всё' : 'Вернуть товары на полку' }</button>
)
}

export default SellBtn;