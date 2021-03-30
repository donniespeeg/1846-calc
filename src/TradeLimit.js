const TradeLimit = (corpShares, corpCash, market, price, setTradeMax, setTradeMin, table) => {
    const redeemPrice = table[table.indexOf(price)+1];
    const cashRedeem = Math.floor(corpCash/redeemPrice);
    const eligibleIssue = 10 - 2 * market - corpShares
    setTradeMax(Math.min(Number(market) , cashRedeem));
    setTradeMin(Math.max(-Number(corpShares) , -eligibleIssue))
}

export default TradeLimit