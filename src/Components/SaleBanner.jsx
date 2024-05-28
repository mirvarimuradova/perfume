import React, { useState, useEffect } from 'react';
import './SaleBanner.css';

const SaleBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sale-banner">
      <p className="sale-text">Big Sale! Up to 50% off!</p>
    </div>
  );
}

export default SaleBanner;