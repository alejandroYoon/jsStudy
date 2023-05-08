import { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업 !!!');
  return ['홍길동','김민수'];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput ] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state: ', prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChnage={handleInputChange}/>
      <button></button>Upload</tton>
      {names.map((name,idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;