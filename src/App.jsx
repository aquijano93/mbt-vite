import './App.css'
import { auth } from './Services/firebase/Index';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login/Login';

function App() {
  // const [count, setCount] = useState(0)

  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser(null)
    }
  })

  return (
    <div className="">
      {/* {user ? <Home userEmail = {user.email}/> : <Login/>} */}
      <Login />
    </div>
  );
}

export default App
