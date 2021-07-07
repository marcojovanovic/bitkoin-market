import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './sass/main.scss';
import bgStar from './images/bg-stars.svg'

// Components

import Banner from './components/Banner';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';


import HomePage from './pages/HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
   <div style={{backgroundImage: `url("${bgStar}")`}} className='app-bg'>
      <AnimateSharedLayout type="crossfade">
        <Header />
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Banner />
              {!loading && (
                <div className="transition-image final">
                  <motion.div
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    layoutId="main-image-1"
                  >
                    <HomePage />
                  </motion.div>
                </div>
              )}
            </>
          )}
        </AnimatePresence>
       {loading ? '' : <Footer />  }
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
