/*
  PMO Master
  Raymundo Paz
  October 15th, 2025
*/

import Slider from '../../components/slider/Slider';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Slider size="xs" />
      <Slider size="s" />
      <Slider size="m" />
      <Slider size="l" />
      <Slider size="xl" />
    </div>
  );
}

export default Home;
