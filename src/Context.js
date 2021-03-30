import { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
    const [corpShares, setCorpShares] = useState(0);
    const [corpCash, setCorpCash] = useState(0);
    const [market, setMarket] = useState(0);
    const [price, setPrice] = useState(60);
    const [run, setRun] = useState(0);
    const [playerShares, setPlayerShares] = useState(0);
    const [playerCash, setPlayerCash] = useState(0);
    const [trade, setTrade] = useState(0);
    const [payment, setPayment] = useState('fullpay');
    const table = [0,10,20,30,40,50,60,70,80,90,100,112,124,137,150,
        165,180,195,212,250,270,295,320,345,405,440,475,510,550];

    return <Context.Provider value={{corpShares, corpCash, market, price, run, playerShares, playerCash, 
    setCorpShares, setCorpCash, setMarket, setPrice, setRun, setPlayerShares, setPlayerCash,
    trade, payment, setTrade, setPayment, table }}>
    {props.children}
    </Context.Provider>
}