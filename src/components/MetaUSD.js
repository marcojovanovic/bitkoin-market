import React, { useEffect } from 'react';
import { CryptoContext } from '../context';

function MetaUSD() {
  const { metaUSD, getMetaUSD } = React.useContext(CryptoContext);

  useEffect(() => {
    getMetaUSD()
  }, []);

  return (
    <>
      <tr>
        <td>{metaUSD.symbol}</td>
        <td>${metaUSD.lastPrice}</td>
        <td className={` ${metaUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{metaUSD.dailyChange}%</td>
        <td>{metaUSD.volume}</td>
      </tr>
    </>
  );
}

export default MetaUSD;
