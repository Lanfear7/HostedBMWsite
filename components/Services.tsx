import React from 'react'
import Link from 'next/link'
import BluePrint from '../public/Services/BluePrints.jpg'
import IndoorAndOutDoor from '../public/Services/Oak-Bench.png'
import CuttingAndCharcuterieBoards from '../public/Services/CuttingAndCharcuterieBoards.jpg'

function Services() {
  return (
    <div className='Services-Container' id='Services'>

        <div className='Services-Overview'>
            <h1>Get Ready To Have An Amazing Piece Of Furniture Or Functional Art In Your Home!</h1>
            <p>Blue Monkeys Woodworking does more then just interior furniture, We also take custom orders for anything to do with woodworking in order to help you to achieve your dream home or outdoor living space.</p>
        </div>

        <div className='Service-Cards'>

            <div className='Services-Card Card1'>
                <h2>Cutting Boards/Charcuterie Board</h2>
                <p>Create the perfect cutting or charcuterie board for your kitchen. From face grain to end grain cutting boards and even live edge charcuterie board we do it all!</p>
                <button><Link href='/gallery'>Check It Out</Link></button>
                <figure>
                    <img src={CuttingAndCharcuterieBoards.src}></img>
                </figure>
            </div>
            
            <div className='Services-Card Card2'>
                <h2>Indoor & Outdoor Furniture</h2>
                <p>First impressions are important so why not stand out with a custom pice of interior or exterior furniture to make those long lasting impressions and &apos;wow&apos; your guests.</p>
                <button><Link href='/gallery'>Check It Out</Link></button>
                <figure>
                    <img src={IndoorAndOutDoor.src}></img>
                </figure>
            </div>

            <div className='Services-Card Card3'>
                <h2>Custom Order</h2>
                <p>At Blue Monkeys Woodworking we believe we make more then just furniture, We make an experience and we would love to make you a part of that experience and make your furniture dreams reality!</p>
                <button><Link href='/contact'>Get In Touch</Link></button>
                <figure>
                    <img src={BluePrint.src}></img>
                </figure>
            </div>

        </div>
    </div>
  )
}

export default Services