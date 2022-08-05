import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue} from "./StateProvider";
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="app">
    <Routes>
      <Route path='/checkout' element={<>
      <Header />
      <Checkout />
      </>} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<>
      <Header />
      <Home />
      </>} />
    </Routes>  
    </div>
  );
}

export default App;
