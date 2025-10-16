/*
  PMO Master
  Raymundo Paz
  October 15th, 2025
*/

import Button from '../../components/buttons/button/Button';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Button buttonStyle="filled" size="m">Some children</Button>
    </div>
  );
}

export default Home;
