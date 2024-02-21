import React from 'react'
import styles from "./button.module.css"
export const Button = ({ isTopVisible, scrollToTop }) => {
  return (
    isTopVisible && (
      <div className="scrolltop" onClick={scrollToTop}>
        <button>top</button>
      </div>
    )
  );
};
