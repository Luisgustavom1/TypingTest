import { useEffect, useState } from 'react';

import './styles.scss';

interface TimerProps {
  finishTyping: () => void
}

const Timer = ({ finishTyping }: TimerProps) => {
  const timerDate = new Date("2019-02-20T00:01:00")
  const [start, setStart] = useState(true)
  const [time, setTime] = useState('01:00')

  const countTime = () => {        
    timerDate.setSeconds(timerDate.getSeconds() - 1)
    
    const newTime = `${timerDate.getMinutes().toString().padStart(2, '0')}:${timerDate.getSeconds().toString().padStart(2, '0')}`
    
    if (newTime === '00:00') {
      setTime('00:00')
      setStart(false)
      finishTyping()
      return
    }
    setTime(newTime)
  }

  useEffect(() => {    
    if(start){
      var interval = setInterval(() => {
        countTime()
      }, 1000);
      return () => clearInterval(interval)
    }
  }, [start])

  return (
    <section className="timer-container">
      <div className="timer-content bannerButton">
        {time}
      </div>
    </section>
  );
}

export default Timer;