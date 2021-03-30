const PayPlayer = (payment, run, playerCash, playerShares, setOutPlayerCash) => {
    switch (payment) {
        case 'withhold' :
            setOutPlayerCash(playerCash);
        break;
        case 'halfpay' :
            if (run % 20 === 0) {
                const runPart = run / 20 * playerShares;
                setOutPlayerCash(runPart + playerCash);
            } else {
                const runPart = (run +10) / 20 * playerShares;
                setOutPlayerCash(runPart + playerCash);
            }
        break;
        default:
            const runPart = run / 10 * playerShares;
            setOutPlayerCash(runPart + playerCash);
    }
}

export default PayPlayer