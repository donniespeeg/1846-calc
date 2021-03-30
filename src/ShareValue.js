const ShareValue = (price, outRun, table, setOutPrice) => {
    const ratio = outRun * 10 / price ;
    const index = table.indexOf(price);

    if (ratio < .25) {
        setOutPrice(table[index-1]);
    } else if ( ratio < 1) {
        setOutPrice(table[index]);
    } else if ( ratio < 2 ) {
        setOutPrice(table[index + 1]);
    } else if (ratio >= 3 && price > 150) {
        setOutPrice(table[index+3]);
    } else {
        setOutPrice(table[index+2]);
    }
}

export default ShareValue