import React,{useEffect} from 'react';
import { CryptoContext } from '../context';

function DashcoinUSD() {
  const { dashUSD,  getDashcoinUSD } = React.useContext(CryptoContext);

  useEffect(()=>{


    getDashcoinUSD()

  },[])


  return (
    <>
      <tr>
        <td>{dashUSD.symbol}</td>
        <td>${dashUSD.lastPrice}</td>
        <td>{dashUSD.dailyChange}%</td>
        <td>{dashUSD.volume}</td>
      </tr>
    </>
  );
}

export default DashcoinUSD;

