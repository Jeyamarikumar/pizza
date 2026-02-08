import React,{useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }

    const reste = () =>{
        setCount(0);
    }

  return (
    <div className='counter-container'>
        <h3 className='count-display'>{count}</h3>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reste}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>
      
    </div>
  )
}

export default Counter
