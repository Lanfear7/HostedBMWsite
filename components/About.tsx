import React from 'react'

import WhitePineSideTable from '../public/portfolio/White-Pine-End-Table.jpg'
import FaceGrainCuttingBaord from '../public/portfolio/Face-Grain-Cutting-Board.png'

function About() {
  return (
    <div className='About-Container'>
        <div className='About-Image-Holder'>
            <figure className='Image-Holder Holder1'>
                <img src={WhitePineSideTable.src}></img>
            </figure>
            <figure className='Image-Holder Holder2'>
                <img src={FaceGrainCuttingBaord.src}></img>
            </figure>
        </div>
        <div className='About-Content'>
            <h1>Premium Furniture & Home Decor</h1>
            <h2>Your Dream Pice Of Furniture Is Only One Email Away! Get In Touch With Us To Tell Us About You Project, With Great Access To Premium Lumber We Can Make Any Project With A Wide Variety Of Different Woods Species.</h2>
            <p>At Blue Monkeys Woodworking, We turn ideas into reality to help you make your perfect home. From your first email to the last screw of the installation or drop off of your furniture, your experience and our quality are always our top priority.</p>
            <p>Once you see the quality and feel the difference between furniture that has been built with 100% real lumber you will never go back to anything else. With access to lots of different types of lumber we can we can make many projects and different price points.</p>
            <p>With our wide variety of different stains and finishes we will be able to make any piece look and feel exactly how you want it. Along with our 3D rendering you&apos;ll be able to see exactly how your piece of furniture will look before we turn it into reality. </p>
        </div>
    </div>
    
  )
}

export default About