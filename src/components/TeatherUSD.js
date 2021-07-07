import React, {useEffect} from 'react';

import { CryptoContext } from '../context';

function TeatherUSD() {
  const { teatherUSD, getTeatherUSD } = React.useContext(CryptoContext);



  useEffect(()=>{


    getTeatherUSD()


  },[])

 

  
  return (
    <>
      <tr>
        <td>{teatherUSD.symbol}</td>
        <td>${teatherUSD.lastPrice}</td>
        <td className={` ${teatherUSD.dailyChange <= 0  ? 'redColor' : 'greenColor'}`}>{teatherUSD.dailyChange}%</td>
        <td>{teatherUSD.volume}</td>
      </tr>
    </>
  );
}

export default TeatherUSD;
