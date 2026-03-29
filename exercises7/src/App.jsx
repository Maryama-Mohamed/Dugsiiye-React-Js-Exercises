import { useEffect, useState } from 'react'

function App() {

  const [mousemove, setMouseMove] = useState({x:0,y:0});

  useEffect(()=> {

    const mousemover = (e) =>{
      setMouseMove({x: e.clientX, y: e.clientY})

    }

    window.addEventListener("mousemove", mousemover)
  })


  return (
   <div>
    <p>Mouse X: {mousemove.x}</p>
    <p>Mouse Y: {mousemove.y}</p>

   </div>
  )
}

export default App
