import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function EosUSD() {
  const { eosUSD, getEosUSD } = React.useContext(CryptoContext);

  useEffect(()=>{

   getEosUSD()

  },[])

  


  return (
    <>
      <tr>
        <td>{eosUSD.symbol}</td>
        <td>${eosUSD.lastPrice}</td>
        <td>{eosUSD.dailyChange}%</td>
        <td>{eosUSD.volume}</td>
      </tr>
    </>
  );
}

export default EosUSD;
