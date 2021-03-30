const TradeCorp = (table, price, setOutCorpShares, trade, corpShares, tradeCorpCash, setTradeCorpCash, market, setOutMarket) => {
    const issuePrice = table[table.indexOf(price) - 1];
    const redeemPrice = table[table.indexOf(price) + 1];

    setOutCorpShares(corpShares + trade);    
    setOutMarket(market - trade);
    if (trade === 0) {
        setTradeCorpCash(0);
    } else if (trade > 0) {
        setTradeCorpCash(-redeemPrice * trade );
    } else if (trade < 0) {
        setTradeCorpCash(issuePrice * trade);
    }
}

export default TradeCorp