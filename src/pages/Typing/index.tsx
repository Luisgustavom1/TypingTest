import React from 'react';
import Letters from '../../components/Letters';
import Timer from '../../components/Timer';
import { useLettersContext } from '../../context/lettersContext';

import './styles.scss';
const Typing = () => {
  let { lettersForMinute } = useLettersContext()
  const allLetters: string[] | undefined = [];

  const finishTyping = () => {
    console.log('letters For seconds', allLetters.length / 60);   
    
    lettersForMinute = allLetters.length;

    console.log('lettersForMinute', lettersForMinute);
    
  }

  return(
    <div className="container typing-container">
      <Timer finishTyping={finishTyping} />
      <Letters allLetters={allLetters} />
    </div>
  )
}

export default Typing;