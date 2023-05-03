import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 const [time, setTime] = useState(1);

 const handleClick = () => {
  //  let newTime;
   if(time >= 24) {
     newTime=1;
   }else {
     newTime= time +1;
   }
   setTime(newTime);
 };


  return (
    <div>
      <span>현재 시각: {time}시</span> <br></br>
      <button onClick= {handleClick}>Update</button>
    </div>
  );
}

export default App;