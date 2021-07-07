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
        <td className={` ${eosEUR.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{eosEUR.dailyChange}%</td>
        <td>{eosEUR.volume}</td>
      </tr>
    </>
  );
}

export default EosEUR;
