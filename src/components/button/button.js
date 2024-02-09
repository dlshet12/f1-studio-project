import React from 'react';
import './style.css';

const ButtonSection = ({ leftSubText, leftText, buttons }) => (
  <div className='parent-button'>
    <div className='button-section'>
      {leftText && (
        <div className='left-text'>
          <div>{leftSubText}</div>
          <div>{leftText}</div>
        </div>
      )}
      <div className='button-container'>
        {buttons.map((button, index) => (
          <button key={index} onClick={button.onClick}>
            {button.icon && <img src={button.icon} alt='button-icon' />}
            {button.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ButtonSection;
