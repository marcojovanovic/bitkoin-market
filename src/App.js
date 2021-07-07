import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./sass/main.scss";

// Components

import Banner from "./components/Banner";
import Loader from "./components/Loader";

import HomePage from './pages/HomePage'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
          
            <Banner />
            {!loading && (
              <div className='transition-image final'>
                <motion.div
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  
                  layoutId='main-image-1'
                >
                 <HomePage />
                </motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
