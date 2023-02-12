import React, { useEffect } from 'react'
import { fetchGreetings } from '../redux/greetingSlice'
import { useSelector, useDispatch } from 'react-redux'



function Greetings() {
  const greetings = useSelector(state => state.greeting)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch])

  return (
    <>
    <header>
        <h1>Random Greetings</h1>
      </header>
      <h2 style={{ color: "blue" }}>{greetings.message}</h2>
    </>
  )
}

export default Greetings