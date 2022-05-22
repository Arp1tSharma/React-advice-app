import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async() => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(res.data.slip.advice);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);
  

  return (
    <>
      <div className='container'>
        <div className='advice-container'>
          <h1>{advice}</h1>
          <button type='button' onClick={fetchAdvice}>
            <span>Give me advice</span>
          </button>
        </div>
      </div>
      <footer>
        Created by Arpit Sharma
      </footer>
    </>
  );
}

export default App;
