import React, {useEffect} from 'react';
import { CryptoContext } from '../context';

function TeatherUSD() {
  const { blockpassUSD, getBlockPassUSD } = React.useContext(CryptoContext);



  useEffect(()=>{

  getBlockPassUSD()
 

  },[])

 


  return (
    <>
      <tr>
        <td>{blockpassUSD.symbol}</td>
        <td>${blockpassUSD.lastPrice}</td>
        <td>{blockpassUSD.dailyChange}%</td>
        <td>{blockpassUSD.volume}</td>
      </tr>
    </>
  );
}

export default TeatherUSD;
