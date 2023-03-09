import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { increment, decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch({increment, decrement})
  return (
    <>
  <h1>Counter</h1>
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    </section>
    </>
  
  )
}

export default Counter