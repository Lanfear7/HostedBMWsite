import React,{useState} from 'react'

import WhitePineEntryTable from '../public/portfolio/White-Pine-Entry-Table.jpg'
import EdgeGrainCuttingBoard from '../public/portfolio/Edge-Grain-Cutting-Board.png'
import WhitePineSideTable from '../public/portfolio/White-Pine-End-Table.jpg'

function Gallery() {
  return (
    <div className='Portfolio-Container'>
        <div className='Image-Container'>

            <div className='Card  Card1'>
                <div className='Content'>
                    <h1>Content</h1>
                </div>
                <figure className='Image-Holder'>
                    <img src={WhitePineEntryTable.src}></img>
                </figure>
            </div>

            <div className='Card  Card2'>
                <figure className='Image-Holder'>
                    <img src={EdgeGrainCuttingBoard.src}></img>
                </figure>
                <div className='Content'>
                    <h1>Content</h1>
                </div>
            </div>

            <div className='Card  Card3'>
                <div className='Content'>
                    <h1>Content</h1>
                </div>
                <figure className='Image-Holder'>
                    <img src={WhitePineSideTable.src}></img>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Gallery