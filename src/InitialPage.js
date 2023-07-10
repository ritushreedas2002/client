import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './InitialPage.css';

const InitialPage = () => {
  const animationContainer = useRef(null);
  const duration = 5000; // Stop animation after 6 seconds (6000 milliseconds)

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loader.json'), // Replace with the path to your animation JSON file
    });

    const timer = setTimeout(() => {
      animation.stop();
      //window.location.href = './Home'; // Redirect to the new page
    }, duration);

    return () => {
      clearTimeout(timer);
      //animation.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="loader"></div>
      <div ref={animationContainer} className="animation-container"></div>
    </div>
  );
};

export default InitialPage;
