import React from 'react'
import About from './components/About.js'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import Info from './components/Info'
import Pic from './components/Pic'

export default function App() {
    return(
        <div className='container'>
            <Pic />
            <Info />
            <Buttons />
            <About />
            <Footer />
        </div>
    )
}
