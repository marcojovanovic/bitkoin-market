import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function SantimentNetwork() {
  const { santimentUSD, getSantimentUSD } = React.useContext(CryptoContext);

  useEffect(()=>{

    getSantimentUSD()

  },[])

  

  return (
    <>
      <tr>
        <td>{santimentUSD.symbol}</td>
        <td>${santimentUSD.lastPrice}</td>
        <td className={` ${santimentUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{santimentUSD.dailyChange}%</td>
        <td>{santimentUSD.volume}</td>
      </tr>
    </>
  );
}

export default SantimentNetwork;
