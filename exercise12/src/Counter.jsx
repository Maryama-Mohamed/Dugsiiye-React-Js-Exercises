import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const Increment = () => {
        // console.log("click")
        setCount(count + 1);

    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }

    }
  return (
    <div>
        <h2>Counter :{count} </h2>
        <button onClick={decrement} disabled={count === 0 }>decrement</button>
        <button onClick={Increment}>Increment</button>
      
    </div>
  )
}

export default Counter
