import React from 'react'
import footerBg from '../images/bg-section-bottom-desktop-2.svg'


function Footer() {
  return (
   <div style={{backgroundImage: `url("${footerBg}")`}} className='footer'>
     Copyright &#xA9; Marco Jovanovic {new Date().getFullYear()}
    </div>
  )
}

export default Footer
