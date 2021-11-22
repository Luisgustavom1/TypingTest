import React from 'react';

import './styles.scss';

const Score: React.FC = () => {
  return (
    <div className='score-container'>
        <p>Last typing:</p>
        <h3>120 letters/seconds</h3>
    </div>
  );
}

export default Score;