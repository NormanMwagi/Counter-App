import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0);

  const handleClick= () => {
    setCount(count+1);
  } 
  const resetCount= () => {
    setCount(0);
  } 
  return (
    <div>
      
      <h1>My Counter App</h1>
      <div className='content'>
      <h4>{count}</h4>
      <button className='btn btn-primary' onClick={handleClick}>Increase Count</button>
      </div>
      <div className='col'>
      <button className='btn btn-danger' onClick={resetCount}>Reset Count</button>
    
      </div>
    
     
    </div>
  );
}

export default App;
