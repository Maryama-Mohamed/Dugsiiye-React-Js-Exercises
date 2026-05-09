import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [isloggedIn, setIsLoggedIn] = useState(false);
    

    const loginButton = (event) =>{

        event.preventDefault();

        if(username && password){
            
           setIsLoggedIn(true)
        }
     };
        const logOut = () => {
            setPassword("")
            setUsername("")
            setIsLoggedIn(false)
        }
         if(isloggedIn){
            return( 
            <div>
                <h2>Welcome {username} !</h2>
                <button onClick={logOut}>log out</button>
            </div>
            )
        }
    
  return (
    <div>
        <form onSubmit={loginButton}>
        <h2>Login</h2>
        <label>Username</label>
        <input  type='text' value={username}   onChange={(e) => setUsername(e.target.value)} required/> <br />
        <label>password</label>
        <input  type='password' value={password}   onChange={(e) => setPassword(e.target.value)} required/> <br />
      <button type='submit'>Login</button>
      </form>
    </div>
  )

};
export default LoginForm
