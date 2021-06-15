import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import {css} from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
  const [loading, setLoading] = useState(false);
  const overRide = css`
    display:block;
    border-color:red;
    margin-top:20%;`;

  useEffect(()=>{
    setLoading(true);
    setInterval(()=>{
      setLoading(false);
    },5000)
  },[]);

  return (
    <div className="App">
    {
      loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={overRide} size={40}/>
      :
      <>
      <Navbar/>
      <Banner/>
      <Products/>
      <About/>
      <Contact/>
      </>
    }
    </div>
  );
}

export default App;
