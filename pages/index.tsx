import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'

import Groilla from '../public/Logo-Transparent.png'
import BMW from '../public/BMW-Transparent-Name.png'
import { useSpring,animated } from 'react-spring'
import About from '../components/About'
import ContactWidget from '../components/ContactWidget'
import Services from '../components/Services'
import StandOut from '../components/StandOut'
import Process from '../components/Process'
import Footer from '../components/Footer'

export default function Home() {

  const BannerHeader = useSpring({
    to: {y: 0},
    from: {y: 400},
    delay: 600,
    config: {duration: 400},
    
  })

  const GorillaAnimation = useSpring({
    to: {x: 150},
    from: {x: -400},
    config: {duration: 700},
    delay: 300
  })

  return (
    <div className='Home-Container'>
      <Navbar />
      <div className='Banner'>
        <animated.figure className='Logo' style={GorillaAnimation}>
          <img src={Groilla.src}></img>
        </animated.figure>
        <animated.h1 style={BannerHeader}>Transform Your Home Turn Your Furniture Dreams Into Reality </animated.h1>
      </div>
      <About />
      <Services />
      <Process />
      <ContactWidget />
      <StandOut />
      <Footer />
    </div>
  )
}
