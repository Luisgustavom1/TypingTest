import React from 'react';
import { Navigate, useNavigate } from 'react-router';

import './styles.scss'

const StartButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className='start-button' onClick={() => navigate('typing')}>
      Start typing
    </button>
  )
}

export default StartButton;