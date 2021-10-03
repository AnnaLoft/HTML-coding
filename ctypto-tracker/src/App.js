import React, { useState, useEffect} from 'react';
import './App.css';
import Coin from './Coin';
import { getCoins } from './CoinService';
import AsyncCSV from './AsyncCSV';




function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');


  const handleChange = e => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      setCoins(await getCoins());
    };
    fetchData();
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateTable = async () => {
    setLoading(true);

    setCoins(await getCoins());

    setTimeout(() => setLoading(false), 500);
  };


  return (
    <div className="coin-app">

      <div className="coin-search">
        <h1 className="coin-text">Coin Tracker</h1>

        <div className="input-panel">

          <div className="input-wrapper">

            <div className="search-img">
              <img className="search-pic" src='/images/search.svg' alt="search-icon"></img>
            </div>

            <input className="coin-input" type="text" placeholder="Search" onChange={handleChange} />
          </div>
          <div className="buttons-wrapper">
            
            <div className="button-container">

              <button type="button" className="coin-refresh" onClick={updateTable}>{loading && (
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
            )}
            {loading && <span>Updating</span>}
            {!loading && <span>Refresh</span>}</button>

            </div>
            <div className="button-container">  
            <button type="button" className="coin-refresh">Get balances</button>
            </div>
            <AsyncCSV />
          </div>
        </div>
      </div>
      <div className="coins-table">
        <div className="categories">
          <div className="name_wrapper categorie">Name</div>
          <div className="volume_wrapper categorie">Volume</div>
          <div className="price_wrapper categorie">Current price</div>
          <div className="percentage_wrapper categorie">Percent change 24h</div>
          <div className="marcetcap_wrapper categorie">Mkt cap</div>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}

            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
