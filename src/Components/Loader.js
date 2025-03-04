import React, { useEffect, useState } from "react";
import "./Loader.css"; 

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 15); 

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null; 

  return (
    <div className="loader-container">
      <div className="loader-text">
        <span className="loading-dots">Jathin's Profile is loading...</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Loader;
