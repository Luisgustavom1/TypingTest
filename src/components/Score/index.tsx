import React from 'react';

import './styles.scss';

const Score: React.FC = () => {
  const lastTyping = localStorage.getItem('typing');

  return (
    <div className='score-container'>
      <p>Last typing:</p>
      <h3>{lastTyping ? `${lastTyping} letters/minutes` : 'First time, test your typing now!'}</h3>
    </div>
  );
}

export default Score;