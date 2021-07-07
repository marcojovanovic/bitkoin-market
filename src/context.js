import React, { createContext, useState, useEffect } from 'react';

export const CryptoContext = createContext(); // izvoz za komponente

const CryptoProvider = ({ children }) => {
  // bitkoin USD component

  const [bitkoinUSD, setBitkoinUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  // bitkoin EUR component
  const [bitkoinEUR, setBitkoinEUR] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  // ethereum USD component

  const [ethereumUSD, setEthereumUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  // ethereum EUR component

  const [ethereumEUR, setEthereumEUR] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  // eos USD component

  const [eosUSD, setEosUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [eosEUR, setEosEUR] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [dashUSD, setDashUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [ripleUSD, setRipleUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [dogeUSD, setDogeUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [metaUSD, setMetaUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [santimentUSD, setSantimentUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [teatherUSD, setTeatherUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  const [blockpassUSD, setBlockpassUSD] = useState({
    symbol: '',
    dailyChange: '',
    volume: '',
    lastPrice: '',
  });

  // 1. BitkoinUSD

  const getBitkoinUSD = () => {
    // WEBSOCKET CONNECTION

    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    // WEBSOCKET SEND MESSAGES

    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tBTCUSD',
          pair: 'tBTCUSD',
        })
      );
    };

    // WEBSOCKETS GET MESSAGES AND SETSTATE

    wss.onmessage = (msg) => {
      const inputDetails = {
        cid: Date.now(),
        type: 'LIMIT',
        symbol: 'BTCUSD',
        amount: '',
        price: '',
      };

      let res = JSON.parse(msg.data);

      let hb = res[1];

      if (hb !== 'hb') {
        if (res) {
          let responder = res[1];
          if (responder) {
            let dailyChange = Number((responder[5]) *100).toFixed(2)
            let volume = Number(responder[7].toFixed(2));
            let lastPrice = Number(responder[6].toFixed(2));

            setBitkoinUSD({
              dailyChange: dailyChange,
              volume: volume,
              lastPrice: lastPrice,
              symbol: inputDetails.symbol,
            });
          }
        }
      }
    };
  };

  // 2. BitkoinEUR

  const getBitkoinEUR = () => {
    // OPEN WEBSOCKET CONNECTION

    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    // WEBSOCKET SEND MESSAGES

    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tBTCEUR',
          pair: 'tBTCEUR',
        })
      );
    };

    // WEBSOCKETS GET MESSAGES AND SETSTATE

    wss.onmessage = (msg) => {
      const inputDetails = {
        cid: Date.now(),
        type: 'LIMIT',
        symbol: 'BTCEUR',
        amount: '',
        price: '',
      };

      let res = JSON.parse(msg.data);

      let hb = res[1];

      if (hb !== 'hb') {
        if (res) {
          let responder = res[1];
          if (responder) {
            let dailyChange = Number((responder[5]) *100).toFixed(2)
            let volume = Number(responder[7].toFixed(2));
            let lastPrice = Number(responder[6].toFixed(2));

            setBitkoinEUR({
              dailyChange: dailyChange,
              volume: volume,
              lastPrice: lastPrice,
              symbol: inputDetails.symbol,
            });
          }
        }
      }
    };
  };

  // 2. Ethereum USD

  const getEthereumUSD = () => {
    // OPEN WEBSOCKET CONNECTION

    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    // WEBSOCKET SEND MESSAGES

    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tETHUSD',
          pair: 'tETHUSD',
        })
      );
    };

    // WEBSOCKETS GET MESSAGES AND SETSTATE

    wss.onmessage = (msg) => {
      let res = JSON.parse(msg.data);

      const inputDetails = {
        cid: Date.now(),
        type: 'LIMIT',
        symbol: 'ETHUSD',
        amount: '',
        price: '',
      };

      let hb = res[1];

      if (hb !== 'hb') {
        if (res) {
          let responder = res[1];
          if (responder) {
            let dailyChange = Number((responder[5]) *100).toFixed(2)
            let volume = Number(responder[7].toFixed(2));
            let lastPrice = Number(responder[6].toFixed(2));

           

            setEthereumUSD({
              dailyChange: dailyChange,
              volume: volume,
              lastPrice: lastPrice,
              symbol: inputDetails.symbol,
            });
          }
        }
      }
    };
  };
  const getEthereumEUR = () => {
    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tETHEUR',
        pair: 'tETHEUR',
      })
    );
  };

// WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    let res = JSON.parse(msg.data);

    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'ETHEUR',
      amount: '',
      price: '',
    };

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          //console.log(responder);

          setEthereumEUR({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };
  };
  const getBlockPassUSD = () => {
    // WEBSOCKET CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

  // WEBSOCKET SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tPASUSD',
        pair: 'tPASUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'PASUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setBlockpassUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };

  };
  const getDashcoinUSD = () => {
    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tDSHUSD',
        pair: 'tDSHUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'DASHUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setDashUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };
  };
  const getDogecoinUSD = () => {
    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tDOGE:USD',
        pair: 'tDOGE:USD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'DOGEUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setDogeUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };
  };
  const getEosUSD = () => {
    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tEOSUSD',
        pair: 'tEOSUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'EOSUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setEosUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };

  };
  const getEosEUR = () => {
    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tEOSEUR',
        pair: 'tEOSEUR',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'EOSEUR',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setEosEUR({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };

  };
  const getMetaUSD = () => {

    // OPEN CONNECTION

    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    // SEND MESSAGES

    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tETPUSD',
          pair: 'tETPUSD',
        })
      );
    };

    // WEBSOCKETS GET MESSAGES AND SETSTATE

    wss.onmessage = (msg) => {
      const inputDetails = {
        cid: Date.now(),
        type: 'LIMIT',
        symbol: 'ETPUSD',
        amount: '',
        price: '',
      };

      let res = JSON.parse(msg.data);

      let hb = res[1];

      if (hb !== 'hb') {
        if (res) {
          let responder = res[1];
          if (responder) {
            let dailyChange = Number((responder[5]) *100).toFixed(2)
            let volume = Number(responder[7].toFixed(2));
            let lastPrice = Number(responder[6].toFixed(2));

            setMetaUSD({
              dailyChange: dailyChange,
              volume: volume,
              lastPrice: lastPrice,
              symbol: inputDetails.symbol,
            });
          }
        }
      }
    };


  };
  const getRipleUSD = () => {

    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tXRPUSD',
        pair: 'tXRPUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'XRPUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(2)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setRipleUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };


  };
  const getSantimentUSD = () => {

    // OPEN CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');


  // SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tSANUSD',
        pair: 'tSANUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'SANUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(4)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setSantimentUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };



  };
  const getTeatherUSD = () => {


    // WEBSOCKET CONNECTION

  const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

  // WEBSOCKET SEND MESSAGES

  wss.onopen = () => {
    wss.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tEUTUSD',
        pair: 'tEUTUSD',
      })
    );
  };

  // WEBSOCKETS GET MESSAGES AND SETSTATE

  wss.onmessage = (msg) => {
    const inputDetails = {
      cid: Date.now(),
      type: 'LIMIT',
      symbol: 'EUTUSD',
      amount: '',
      price: '',
    };

    let res = JSON.parse(msg.data);

    let hb = res[1];

    if (hb !== 'hb') {
      if (res) {
        let responder = res[1];
        if (responder) {
          let dailyChange = Number((responder[5]) *100).toFixed(6)
          let volume = Number(responder[7].toFixed(2));
          let lastPrice = Number(responder[6].toFixed(2));

          setTeatherUSD({
            dailyChange: dailyChange,
            volume: volume,
            lastPrice: lastPrice,
            symbol: inputDetails.symbol,
          });
        }
      }
    }
  };
  };

  return (
    <CryptoContext.Provider
      value={{
        bitkoinEUR,
        bitkoinUSD,
        ethereumUSD,
        ethereumEUR,
        eosUSD,
        eosEUR,
        dashUSD,
        ripleUSD,
        dogeUSD,
        metaUSD,
        santimentUSD,
        teatherUSD,
        blockpassUSD,
        getBitkoinUSD,
        getBitkoinEUR,
        getEosEUR,
        getEosUSD,
        getEthereumEUR,
        getEthereumUSD,
        getRipleUSD,
        getSantimentUSD,
        getTeatherUSD,
        getDashcoinUSD,
        getDogecoinUSD,
        getMetaUSD,
        getBlockPassUSD
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoProvider }; // izvoz za index.js
