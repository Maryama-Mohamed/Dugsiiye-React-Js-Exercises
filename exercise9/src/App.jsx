import React, { useEffect, useState } from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(false);


  const [userData, setUserData] = useState(null);

  const [error, setError]= useState("");

  useEffect(() => {
    if(error){
      console.error("Username Is Incorrect User:", error)
    }
  },[error]);

  // search button
  const searchButton = async () => {
    if(!searchTerm) return

    setLoading(true);
    setError("")
    setUserData(null);

    // try{

    //    await new Promise((resolve) => setTimeout(resolve, 1000));

    //     const response = await fetch("https://api.github.com/users/");

    //     const data = await response.json();
    //     console.log(data);

    //   }catch(error){
    //     console.error("error", error);

    //   }
    //   searchButton();
    // }
     try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${searchTerm.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error('GitHub user not found');
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    // <div>
    //   <>
    //   <h1>Github Search Project</h1>
    //   <input type='text' placeholder='Enter Username'/>
    //   <button  type='search'>Search</button> 
    //   </>
      
    // </div>
     <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchButton}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {userData && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{userData.name || userData.login}</h3>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  )
}

export default App
