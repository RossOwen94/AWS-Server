import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'





function App() {



  const [heroBg,setHeroBg] = useState(undefined)



  useEffect(()=>{


    axios.get('https://api.unsplash.com/photos/random')
    .then((data)=>{
      console.log(data)
    })
    .catch((e)=>{
      console.log(e)
    })

  },[])


  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div className="home-hero">
        <h1>Homepage Hero</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>

    </div>
  );
}

export default App;
