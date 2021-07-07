import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function EosEUR() {
  const { eosEUR, getEosEUR } = React.useContext(CryptoContext);

  useEffect(()=>{

    getEosEUR()


  },[])

  
  return (
    <>
      <tr>
        <td>{eosEUR.symbol}</td>
        <td>€{eosEUR.lastPrice}</td>
        <td>{eosEUR.dailyChange}%</td>
        <td>{eosEUR.volume}</td>
      </tr>
    </>
  );
}

export default EosEUR;
