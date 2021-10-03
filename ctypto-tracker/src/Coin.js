import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>

          <div className="coin-row__item">
            <img className="coin-icon" src={image} alt='crypto' />
          </div>

          <div className="coin-row__item_name">

          <span>{name}</span>



          <span className='coin-symbol'>{symbol}</span>
          
          </div>
          </div>


        <div className='coin-data'>
          <div className="coin-row__item">
            <div className="coin-row__item__label"><span className="small-label">Volume</span></div>
            <p className='coin-price'>${price}</p></div>
          <div className="coin-row__item">
          <div className="coin-row__item__label"><span className="small-label">Current price</span></div>
            <p className='coin-volume'>${volume.toLocaleString()}</p></div>
          <div className="coin-row__item">
          <div className="coin-row__item__label"><span className="small-label">Price change</span></div>
            {priceChange < 0 ? (
              <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}</div>
          <div className="coin-row__item">
          <div className="coin-row__item__label"><span className="small-label">Market cap</span></div>
            <p className='coin-marketcap'>
              ${marketcap.toLocaleString()}
            </p></div>
        </div>
      </div>
    </div>
 
  );
};

export default Coin;