import { useState } from 'react';
import Card from './Card';

const LoadingApp = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <Card />}
      <button onClick={() => setShow((prevState) => !prevState)}>
        show/hide
      </button>
    </div>
  );
};

export default LoadingApp;
