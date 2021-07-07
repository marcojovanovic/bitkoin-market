import React, { useEffect } from 'react';
import { CryptoContext } from '../context';


function BitkoinUSD() {
  const { bitkoinUSD, getBitkoinUSD } = React.useContext(CryptoContext);

  useEffect(() => {
    getBitkoinUSD()
  }, []);

  return (
    <>
      <tr>
        <td>{bitkoinUSD.symbol}</td>
        <td>${bitkoinUSD.lastPrice}</td>
        <td className={` ${bitkoinUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{bitkoinUSD.dailyChange}%</td>
        <td>{bitkoinUSD.volume}</td>
      </tr>
    </>
  );
}

export default BitkoinUSD;
