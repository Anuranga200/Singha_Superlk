import { userNavigate } from 'react'
import './App.css'

function App() {
  const navigate =userNavigate();//hook
  return (
    <>
      <h1>WELCOME TO SINGHE SUPER</h1>
      <button onClick={()=>navigate('/Login')}>Login</button>
    </>
  )
};

export default App
