import { useState } from 'react';

function App () {
  const [time,setTime] = useState(4);
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    }else {
      newTime = time + 1;
    }
    setTime(newTime);
    };


  console.log('업데이트');
  return (
    <div>
      <span>시계 : { time }시</span><br></br>
      <button onClick={handleClick}>업데이트</button>
    </div>
  )
}

export default App;