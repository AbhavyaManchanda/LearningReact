// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ScrollIndicator from './components'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </>
  )
}

export default App
