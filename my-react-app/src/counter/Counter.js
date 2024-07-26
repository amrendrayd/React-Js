import React, { useState } from 'react';
import './Counter.css'

function Counter() {
    let [count, setCount] = useState(0)

    const valueInc = () => {
        setCount(count++);
    }

    const valueDec = () => {
        if(count<0) return;
        setCount(count--);
    }
  return (
    <div className='container'>
        <h1 className='heading'>Counter Value {count}</h1>
        <button onClick={valueInc} className='inc-btn'>Increment</button>
        <button onClick={valueDec} className='dec-btn'>decremnet</button>
    </div>
  )
}

export default Counter;