import React from 'react'
import EntryTable from '../public/portfolio/White-Pine-Entry-Table.jpg'

function Process() {
  return (
    <div className='Process-Container'>
        <div className='Process-Content'>
            <h2>Custom Furniture The Blue Monkeys Way</h2>
            <h1>What To Expect From Start To Finish</h1>
            <p>Here at Blue Monkeys Woodworking, we believe it isn`&apos;`t just our job to make furniture but to help transform your home. Thats why durning the design process we will work hand and hand with you so you can receive the best possible piece for your home or patio. </p>
            <ul>
                <li>Free Quote</li>
                <li>100% Premium Sourced Lumber</li>
                <li>Timeline For Completion</li>
                <li>1 year warranty</li>
                <li>Guaranteed Satisfaction</li>
            </ul>
        </div>
        <div className='Process-Image'>
          <figure>
            <img src={EntryTable.src}></img>
          </figure>
        </div>
        
    </div>
  )
}

export default Process