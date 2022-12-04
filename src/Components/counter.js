import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrease = () =>{
        setCount(count+1)
    }
    const handleDecrease = () =>{
        setCount(count-1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    return (

    <div className='container'>
        <h1 className='app-name'>Counter App</h1>
        <p className='app-body'>Count: {count}</p>
        <div className='buttons'>
            <button className="btn" onClick={handleIncrease} disabled={count===10 ? true : false}>+</button>
            <button className="btn" onClick={handleDecrease} disabled={count===0 ? true : false}>-</button>
            <button className="btn" onClick={handleReset} disabled={count===0 ? true : false}>0</button>
        </div>
    </div>
  )
}
