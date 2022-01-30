import { useState, useEffect, useRef } from 'react';

const ScrollAnimation = () => {
  const [background, setBackground] = useState('black');
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const backgroundColor = y > 0 ? 'black' : 'red';
      setBackground(backgroundColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          height: '180vh',
          background,
          color: 'white',
          marginTop: '200px',
        }}
        ref={divRef}
      >
        <h1>Scroll to change background-color</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
