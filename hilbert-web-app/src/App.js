import React, {useState, useEffect} from 'react';
import './App.css';
import Box from "./Components/box/Box";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/hilbert').then(res => res.json()).then(data => {
      setCurrentTime(data.data);
    })
  }, [])

  return (
    <div className="App">
      {
        currentTime && currentTime.map(row => (
          <div className="row">{row.map(element => <Box color={element} height={window.innerHeight/currentTime.length}/>)}</div>
          )
        )
      }  
      {currentTime &&  console.log(currentTime)}      
    </div>
  );
}

export default App;
