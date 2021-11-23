import React, { useEffect, useState } from 'react';

import './styles.scss';

const Letters: React.FC = () => {
  const [text, setText] = useState('Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. Aqui vai a palavra para testarmos nossa velocidade de digitação. Basta ir copiando esse texto. AAAAAAAAAAAAAAAAA dsfdsf sdfsdfsf dsf sdfs fdsf  sad asdasdasdasdas asd as as s s f l dasdbasodnasoidnaiod naid nasido naibdvfvsdbiso baw cdfasiudaowidcn bsvfuiasohdfpvvbipcau fscydshpgdb gpuiewoacnmpesfinacyv  fbansdcna ovyciaud')
  const [focado, setFocado] = useState(true)
  const [lettersClicked, setLettersClicked] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const letterInput = document.querySelector('.letter-input') as HTMLInputElement

  const nextLine = (index: number) => {
    setText(text?.split('').slice(index + 57).join(''))
    setLettersClicked(lettersClicked?.slice(index + 57))
  }

  const letterClick = (e) => {
    console.log(e.charCode, 'tecla');
    const letterClicked = String.fromCharCode(e.charCode)

    if (text?.split('')[lettersClicked.length] === letterClicked) {
      const lettersClickedUpdate = lettersClicked
      lettersClickedUpdate.push(letterClicked)
      setLettersClicked([...lettersClickedUpdate])

      error && setError(false)

      if ((lettersClickedUpdate.length / 57) % 2 === 0) {
        console.log('addsad', lettersClickedUpdate.length % 57);
        
        nextLine(0)
      }

      return;
    }

    setError(true)
  }

  const focusOnInput = () => {
    console.log('foquei');
    setFocado(true)
  }

  const loseFocusInput = () => {
    console.log('deasfoqei');
    
    setFocado(false)
  }

  useEffect(() => {
    console.log('lettersClicked', lettersClicked);
    
  }, [lettersClicked])

  return (
    <div className='letters-container'>
      <p className='letters letters-box' onClick={() => letterInput?.focus()}>
        <input onKeyPress={letterClick} readOnly onBlur={loseFocusInput} onFocus={focusOnInput} autoFocus className='letter-input'/>
          {text}
        <strong className={`letters letters-typed ${!focado ? 'hidden-animation' : ''} ${error ? 'error' : ''}`}>
          {lettersClicked.join('')}
        </strong>
      </p>
    </div>
  );
}

export default Letters;