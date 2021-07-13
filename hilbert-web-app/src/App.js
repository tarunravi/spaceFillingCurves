import React, {useState, useEffect} from 'react';
import './App.css';
import Box from "./Components/box/Box";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.data);
    })
  }, [])

  return (
    <div className="App">
      {
        currentTime && currentTime.map(row => 
          row.map(element => <Box color={element}/>)
        )
      }        
    </div>
  );
}

export default App;
