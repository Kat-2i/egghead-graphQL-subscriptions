import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useQuery } from 'urql';
import {AuthContext} from './contexts/AuthContext.js'
import Comments from './components/Comments.js'
import Input from './components/Input.js'


function App() {
  const {login, status} = React.useContext(AuthContext)
  
  if(!status || !status.github){
    return (
      <div>
        <h1>Log in to GitHub</h1>
        <p>In order to see your profile, you will have to log in with GitHub</p>
        <button onClick={() => login('github')}>Log in with GitHub</button>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{minWidth: 400}}>
        <Comments/>
        <Input/>
        </div>
      </header>
    </div>
  );
}

export default App;
