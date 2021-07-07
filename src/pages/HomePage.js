import React from 'react';
// IMORT MATERIAL UI

import '../components/coin.css';

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
          </table>
        </>
      </div>
    </>
  );
}
export default HomePage;
