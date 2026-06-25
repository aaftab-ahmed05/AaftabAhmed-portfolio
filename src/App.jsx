import { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Footer from "./components/Footer"
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  const [location, setlocation] = useState({x:0, y:0});

  useEffect(()=>{
    function mouselocator (e){
      setlocation({x:e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove",mouselocator);
    return(
      () => {window.removeEventListener("mousemove",mouselocator);}
    );

  },[])

  return (
    <>

      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          {/* <Route path='/Skills' element={<Skills />}></Route> */}
          <Route path='/Projects' element={<Projects />}></Route>
          {/* <Route path='/Resume' element={}></Route> */}
        </Routes>
        <div className='cursor' style={{left:location.x, top:location.y}}></div>
        <Footer />
      </HashRouter>



    </>
  )
}

export default App;
