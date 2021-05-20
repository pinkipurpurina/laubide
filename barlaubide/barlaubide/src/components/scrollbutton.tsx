import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';



const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div  className ='containerbutton'style={{ display: showScroll ? 'flex' : 'none' }}>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
    </div>
  );
}

export default ScrollArrow;