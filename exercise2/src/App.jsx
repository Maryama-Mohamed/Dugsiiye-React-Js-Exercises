import { useState } from 'react'
import Blog from './blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Blog />
  )
}

export default App
