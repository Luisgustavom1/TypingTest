import React from 'react';
import Score from '../../components/Score';
import StartButton from '../../components/StartButton';
import Title from '../../components/Title';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Title />
      <Score />
      <StartButton />
    </div>
  );
}

export default Home;