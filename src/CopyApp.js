import { useState, useRef } from 'react';

const CopyApp = () => {
  const [text, setText] = useState('hola');
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand('copy');
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>copy</button>
    </div>
  );
};

export default CopyApp;
