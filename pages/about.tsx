import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import FaceGrainCuttingBoard from '../public/portfolio/Face-Grain-Cutting-Board.png'
import OakBench from '../public/portfolio/Oak-Bench.png'


function about() {
  return (
    <div>
        <Navbar />
        <div className='About-Banner'>
            <h1>About Us</h1>
        </div>
        <div className='About-Page-Container'>
            <div className='About-Container-Content'>
                <figure className='Image-Container1'>
                    <img src={FaceGrainCuttingBoard.src}></img>
                </figure>
              
                <div className='About-Page-Card1'>
                    <p>Blue Monkey Woodworking is a custom furniture, home decor and wood shop, we a located in Coquitlam, BC. Our shop was founded in 2022, We work with local lumber mills to get the best material at the best price in order to help you achieve your dream home or outdoor living space. </p>
                </div>
                <div className='About-Page-Card2'>
                    <p>What stets Blue Monkeys apart from other wood shops is we work with our clients to create the best pice of furniture for their home using 3D software, this help us to identify any problems with the design or installation process so we can find practical solutions for your home. Over all we pride ourself on the work we do and making sure our customers are happy.</p>
                </div>
                <figure className='Image-Container2'>
                    <img src={OakBench.src}></img>
                </figure>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default about