import { useState, useRef } from 'react';

function FocusApp() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleFocus = () => {
    const input = inputRef.current;
    // const input = document.getElementById('input');
    // console.log(input.value);
    // input.value = 'Hello';
    // input.focus();
    // console.log(inputRef.current.value);
    input.focus();
  };

  return (
    <div>
      <input
        // id="input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}

export default FocusApp;
