const PayCorp = (payment, run, corpShares, setPayCorpCash, setOutRun) => {
    switch (payment) {
        case 'withhold' :
            setPayCorpCash(run);
            setOutRun(0);
        break;
        case 'halfpay' :
            if (run % 20 === 0) {
                const runPart = run / 20 * corpShares;
                const holdPart = run / 2 ;
                setPayCorpCash(runPart + holdPart);
                setOutRun(run / 20);
            } else {
                const runPart = (run +10) / 20 * corpShares;
                const holdPart = (run - 10) / 2;
                setPayCorpCash(runPart + holdPart);
                setOutRun((run+10) / 20);
            }
        break;
        default:
            const runPart = run / 10 * corpShares;
            setPayCorpCash(runPart);
            setOutRun(run/10);
    }
}

export default PayCorp