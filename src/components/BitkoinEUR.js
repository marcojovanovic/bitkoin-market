import React, { useEffect } from 'react';
import { CryptoContext } from '../context';

function BitkoinEUR() {
  const { bitkoinEUR, getBitkoinEUR } = React.useContext(CryptoContext);

  useEffect(() => {
    getBitkoinEUR()
  }, []);

  
  return (
    <>
      <tr>
        <td>{bitkoinEUR.symbol}</td>
        <td>€{bitkoinEUR.lastPrice}</td>
        <td>{bitkoinEUR.dailyChange}%</td>
        <td>{bitkoinEUR.volume}</td>
      </tr>
    </>
  );
}

export default BitkoinEUR;
