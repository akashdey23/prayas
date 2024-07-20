import { useState } from 'react'
import Footer from './components_sadiqua/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>react project</h1>
      <Footer/>
    </>
  )
}

export default App
