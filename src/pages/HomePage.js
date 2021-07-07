import React from 'react';

// IMPORT COMPONENTS

import {
  BitkoinUSD,
  BitkoinEUR,
  EthereumUSD,
  EhtereumEUR,
  EosUSD,
  EosEUR,
  DashcoinUSD,
  RipleUSD,
  DogecoinUSD,
  MetaUSD,
  SantimentNetwork,
  TeatherUSD,
  BlockPassUSD,
} from '../components/index';

function HomePage() {
  return (
    <>
      <div className="container">
        <>
          <table className="container">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>24h change</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <BitkoinUSD />
              <BitkoinEUR />
              <EthereumUSD />
              <EhtereumEUR />
              <EosUSD />
              <EosEUR />
              <DashcoinUSD />
              <RipleUSD />
              <DogecoinUSD />
              <MetaUSD />
              <SantimentNetwork />
              <TeatherUSD />
              <BlockPassUSD />
            </tbody>
          </table>
        </>
      </div>
    </>
  );
}
export default HomePage;
