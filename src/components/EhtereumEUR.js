import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function EhtereumEUR() {
  const { ethereumEUR, getEthereumEUR } = React.useContext(CryptoContext);



  useEffect(()=>{


getEthereumEUR()





  },[])

  

  return (
    <>
      <tr>
        <td>{ethereumEUR.symbol}</td>
        <td>${ethereumEUR.lastPrice}</td>
        <td>{ethereumEUR.dailyChange}%</td>
        <td>{ethereumEUR.volume}</td>
      </tr>
    </>
  );
}

export default EhtereumEUR;
