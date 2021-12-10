import React, { useState } from 'react';

import './styles.scss';

interface LettersProps {
  allLetters: string[] | undefined
}

const Letters = ({ allLetters }: LettersProps) => {
  const [text, setText] = useState('Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai o texto para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto')
  const [focused, setFocused] = useState(true)
  const [lettersClicked, setLettersClicked] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const letterInput = document.querySelector('.letter-input') as HTMLInputElement

  const nextLine = (index: number) => {
    setText(text?.split('').slice(index + 57).join(''))
    setLettersClicked(lettersClicked?.slice(index + 57))
  }

  const letterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const letterClicked = e.key;
    
    if (text?.split('')[lettersClicked.length] === letterClicked) {
      allLetters?.push(letterClicked)

      const lettersClickedUpdate = lettersClicked
      lettersClickedUpdate.push(letterClicked)
      setLettersClicked([...lettersClickedUpdate])

      error && setError(false)

      if ((lettersClicked .length / 57) % 2 === 0) {
        nextLine(0)
      }

      return;
    }

    setError(true)
  }

  const focusOnInput = () => setFocused(true)

  const loseFocusInput = () => setFocused(false)

  return (
    <div className='letters-container'>
      <p className='letters letters-box' onClick={() => letterInput?.focus()}>
        <input onKeyPress={letterClick} readOnly onBlur={loseFocusInput} onFocus={focusOnInput} autoFocus className='letter-input'/>
          {text}
        <strong className={`letters letters-typed ${!focused ? 'hidden-animation' : ''} ${error ? 'error' : ''}`}>
          {lettersClicked.join('')}
        </strong>
      </p>
    </div>
  );
}

export default Letters;
