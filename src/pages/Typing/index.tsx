import React from 'react';
import { useNavigate } from 'react-router-dom';
import Letters from '../../components/Letters';
import Timer from '../../components/Timer';
import { useLettersContext } from '../../context/lettersContext';

import './styles.scss';
const Typing = () => {
  const navigate = useNavigate();
  const { setLettersForMinute, lettersForMinute } = useLettersContext()
  const allLetters: string[] | undefined = [];

  const finishTyping = () => {    
    const typingOfMinute = allLetters.length;
    setLettersForMinute(typingOfMinute);
    
    localStorage.setItem("typing", String(typingOfMinute))

    navigate('/')
  }

  return(
    <div className="container typing-container">
      <Timer finishTyping={finishTyping} />
      <Letters allLetters={allLetters} />
    </div>
  )
}

export default Typing;