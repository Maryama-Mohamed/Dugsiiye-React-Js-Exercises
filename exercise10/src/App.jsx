import React from 'react'
import user from './user'

const App = () => {

  const users = [{
    id:1, name: "Maria", email: "maria@gmail.com",
    id:2, name: "nafyar", email: "nafyar@gmail.com"
  }]
  return (
    <div>
     <User users={users} />
      
    </div>
  )
}

export default App
