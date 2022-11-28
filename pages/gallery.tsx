import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import FaceGrainCuttingBoard from '../public/portfolio/Face-Grain-Cutting-Board.png'
import OakBench from '../public/portfolio/Oak-Bench.png'
import WhitePineEntryTable from '../public/portfolio/White-Pine-Entry-Table.jpg'
import EdgeGrainCuttingBoard from '../public/portfolio/Edge-Grain-Cutting-Board.png'
import WhitePineSideTable from '../public/portfolio/White-Pine-End-Table.jpg'
import CheckerButchBlock from '../public/portfolio/CheckerButchBlock.jpg'
import CuttingAndCharcuterieBoards from '../public/Services/CuttingAndCharcuterieBoards.jpg'

function gallery() {
  return (
    <div>
        <Navbar />
        <div className='Gallery-Header'>
          <h1>Previous Work</h1>
        </div>
        
        <div className='Gallery-Page'>
          <div className='Gallery-Card'>
            <figure>
              <img src={CuttingAndCharcuterieBoards.src}></img>
            </figure>
          </div>
          <div className='Gallery-Card'>
            <figure>
              <img src={OakBench.src}></img>
            </figure>
          </div>
          <div className='Gallery-Card'>
            <figure>
              <img src={WhitePineEntryTable.src}></img>
            </figure>
          </div>
          <div className='Gallery-Card'>
            <figure>
              <img src={EdgeGrainCuttingBoard.src}></img>
            </figure>
          </div>
          <div className='Gallery-Card'>
            <figure>
              <img src={WhitePineSideTable.src}></img>
            </figure>
          </div>
          <div className='Gallery-Card'>
            <figure>
              <img src={CheckerButchBlock.src}></img>
            </figure>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default gallery