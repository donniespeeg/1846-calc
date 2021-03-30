const Submit = (corpShares, market, playerShares, output, setOutput, table, price, run) => {
    const total = Number(corpShares) + Number(market) + Number(playerShares);
    
    if (total > 10) {
        return (
            alert("too many shares accounted for")
        )
    } else if (playerShares < 2) {
        return (
            alert("you don't own enough shares to be President")
        )
    } else if (table.indexOf(price) <= 0) {
        return (
            alert("share price is not a valid value")
        )
    } else if (run % 10 !==0) {
        return (
            alert("enter total run value, must be a multiple of 10")
        )
    } else {
        setOutput(!output);
    }
}

export default Submit