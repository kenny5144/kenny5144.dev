import { useState } from 'react'
import "./App.scss"
import Navbar from './components/Navbarp/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
    <section id='Home'><Navbar/>
    <Main/>
    </section>
    {/* <section >Herro</section> */}
    <section id='About'><About/></section>
    {/* <section id='Portfolio'> */}
      {/* </section> */}
    <span id='Portfolio'><Work/>
</span>  
    <section id='Contact'><Contact/></section>
   
    </>
  )
}

export default App
