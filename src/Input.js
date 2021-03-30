import { useContext } from "react";
import {Context} from './Context.js';

function Input () {
  const {corpShares, corpCash, market, price, run, playerShares, playerCash, 
    setCorpShares, setCorpCash, setMarket, setPrice, setRun, setPlayerShares, setPlayerCash} = useContext(Context);

  const handleCorpShares = (e) => {
    setCorpShares(Number(e.target.value));
  };

  const handleCorpCash = e => {
    setCorpCash(Number(e.target.value))
  };
  
  const handleMarket = e => {
    setMarket(Number(e.target.value));
  };

  const handlePrice = e => {
    setPrice(Number(e.target.value));
  };

  const handleRun = e => {
    setRun(Number(e.target.value));
  };

  const handlePlayerShares = e => {
    setPlayerShares(Number(e.target.value));
  };

  const handlePlayerCash = e => {
    setPlayerCash(Number(e.target.value));
  };

    return (
      <div id='view'>
          <div id="corp" >
            <h3>Corp Holdings</h3>
            <label for='corpShares'>Corp Shares</label>
            <input type='number' id='corpShares' value={corpShares} onChange={handleCorpShares} />
            <br/>
            <label for='corpCash'>Corp Cash</label>
            <input type='number' id='corpCash' value={corpCash} onChange={handleCorpCash}/>
          </div>
          <br />
          <div id='run'>
            <h3>Current Run</h3>
            <label for='market'>Market Shares</label>
            <input type='number' id='market' value={market} onChange={handleMarket}/>
            <br/>
            <label for='price'>Share Price</label>
            <input type='number' id='price' value={price} onChange={handlePrice}/>
            <br />
            <label for='run'>Run Total</label>
            <input type='number' id='run' value={run} onChange={handleRun} />
          </div>
          <br />
          <div id='player'>
            <h3>Player Holdings</h3>
            <label for='playerShares'>Player Shares</label>
            <input type='number' id='playerShares' value={playerShares} onChange={handlePlayerShares}/>
            <br />
            <label for="playerCash">Player Cash</label>
            <input type='number' id='playerCash' value={playerCash} onChange={handlePlayerCash} />
          </div>  
      </div>
    );
  }
  
  export default Input;