import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function RipleUSD() {
  const { ripleUSD, getRipleUSD } = React.useContext(CryptoContext);

  useEffect(()=>{

    getRipleUSD()

  },[])

  

  return (
    <>
      <tr>
        <td>{ripleUSD.symbol}</td>
        <td>${ripleUSD.lastPrice}</td>
        <td className={` ${ripleUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{ripleUSD.dailyChange}%</td>
        <td>{ripleUSD.volume}</td>
      </tr>
    </>
  );
}

export default RipleUSD;

