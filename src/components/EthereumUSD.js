import React, { useEffect } from 'react';
import { CryptoContext } from '../context';

function EthereumUSD() {
  const { ethereumUSD, getEthereumUSD } = React.useContext(CryptoContext);

  useEffect(() => {
    getEthereumUSD()
  }, []);

  

  return (
    <>
      <tr>
        <td>{ethereumUSD.symbol}</td>
        <td>${ethereumUSD.lastPrice}</td>
        <td className={` ${ethereumUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{ethereumUSD.dailyChange}%</td>
        <td>{ethereumUSD.volume}</td>
      </tr>
    </>
  );
}

export default EthereumUSD;
