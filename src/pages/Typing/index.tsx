import React from 'react';
import Letters from '../../components/Letters';
import Timer from '../../components/Timer';

import './styles.scss';
const Typing: React.FC = () => {
  return(
    <div className="container typing-container">
      <Timer />
      <Letters />
    </div>
  )
}

export default Typing;