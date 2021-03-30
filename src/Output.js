import { useContext, useState, useEffect } from "react";
import {Context} from './Context.js';
import TradeLimit from './TradeLimit.js';
import TradeCorp from './TradeCorp.js';
import PayCorp from './PayCorp.js';
import PayPlayer from './PayPlayer.js';
import ShareValue from './ShareValue.js';

function Output () {
    const {corpShares, corpCash, market, price, run, playerShares, playerCash, trade, payment, setTrade, setPayment, table} = useContext(Context);
    const [outCorpShares , setOutCorpShares] = useState(corpShares);
    const [outMarket, setOutMarket] = useState(Number(market)+Number(trade));
    const [outPrice, setOutPrice] = useState(price);
    const [outRun, setOutRun] = useState(run/10);
    const [outPlayerCash, setOutPlayerCash] = useState(playerCash);
    const [tradeMax, setTradeMax] = useState(null);
    const [tradeMin, setTradeMin] = useState(null);
    const [tradeCorpCash, setTradeCorpCash] = useState(0);
    const [payCorpCash, setPayCorpCash] = useState(0);

    
    useEffect(() => {
        TradeLimit(corpShares, corpCash, market, price, setTradeMax, setTradeMin, table);
    }, [] );

    useEffect(() => {
        TradeCorp(table, price, setOutCorpShares, trade, corpShares, 
            tradeCorpCash, setTradeCorpCash, market, setOutMarket);
        
    }, [trade]);

    useEffect(() => {
        PayCorp(payment, run, corpShares, setPayCorpCash, setOutRun);
        PayPlayer(payment, run, playerCash, playerShares, setOutPlayerCash);
        ShareValue(price, outRun, table, setOutPrice);
    }, [payment]);

    const handleTrade = (e) => {
        setTrade(Number(e.target.value));
  };

    const handlePayment = (e) => {
        setPayment(e.target.value);
  };

    return (
        <div id="output">
            <div id="adjust">
                <h3>Payment Settings</h3>
                <label for='adjust'>&lt;--Issue-or-Redeem--&gt;</label>
                <br />
                <input type='range' id='adjust' min={tradeMin} max={tradeMax} step='1' value={trade} onChange={handleTrade} />
                <p>
                    {trade >= 0 ? `Redeem ${trade} shares` : `Issue ${-trade} shares`} 
                    <br />
                    Currently set to {payment} the run.
                    <br />
                </p>
                <br/>
                <input type="radio" id='full' name='payment' value='fullpay' onClick={handlePayment} defaultChecked /><label for='full'>Full Pay</label>
                <input type="radio" id='half' name='payment' value='halfpay' onClick={handlePayment}/><label for='half'>Half Pay</label>
                <input type="radio" id='hold' name='payment' value='withhold' onClick={handlePayment}/><label for='hold'>Withhold</label>
            </div>
            <div id="results">
                <div id="corp" >
                    <h3>Corp Holdings</h3>
                    <p>Corp Shares {corpShares} &#8594; {outCorpShares}
                    <br />
                    Corp Cash ${corpCash} &#8594; ${corpCash + payCorpCash + tradeCorpCash}</p>
                </div>
                <div id='run'>
                    <h3>Current Run</h3>
                    <p>Market Shares {market} &#8594; {outMarket}
                    <br />Share Price {price} &#8594; {outPrice}
                    <br />Run Total {run} &#8594; payment per share ${outRun}</p>
                </div>
                <div id='player'>
                    <h3>Player Holdings</h3>
                    <p>Player Shares {playerShares}
                    <br />Player Cash ${playerCash} &#8594; ${outPlayerCash}</p>
                </div>    
            </div>
        </div>
    );
}

export default Output;