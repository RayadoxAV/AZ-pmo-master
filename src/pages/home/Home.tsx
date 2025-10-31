/*
  PMO Master
  Raymundo Paz
  October 15th, 2025
*/

import { useState } from 'react';
import Slider from '../../components/slider/Slider';
import './Home.css';

const Home: React.FC = () => {
  const [testValue, setTest] = useState(0);


  return (
    <div style={{ padding: '1rem' }}>
      <Slider insetIcon="home" size="xs" />
      <Slider insetIcon="home" size="s" />
      <Slider insetIcon="home" size="m" />
      <Slider insetIcon="home" size="l" />
      <Slider insetIcon="home" size="xl" onChange={(value: number) => { setTest(value) }} />

      <span>{ testValue }</span>
    </div>
  );
}

export default Home;
