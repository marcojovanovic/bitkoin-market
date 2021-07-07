import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function EosUSD() {
  const { dogeUSD, getDogecoinUSD } = React.useContext(CryptoContext);

  useEffect(()=>{

  getDogecoinUSD()


  },[])

  

  return (
    <>
      <tr>
        <td>{dogeUSD.symbol}</td>
        <td>${dogeUSD.lastPrice}</td>
        <td>{dogeUSD.dailyChange}%</td>
        <td>{dogeUSD.volume}</td>
      </tr>
    </>
  );
}

export default EosUSD;
