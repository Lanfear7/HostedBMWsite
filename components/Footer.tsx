import React from 'react'
import { useRouter } from 'next/router'

function Footer() {
    const router = useRouter()
  return (
    <div className='Footer-Container'>
        <footer>
            <div className='Footer-Card'>
                <h1>Blue Monkeys Woodworking</h1>
                <p>Always Producing High Quality Furniture</p>
            </div>

            <div className='Footer-Card'>
                <h1>Services</h1>
                <ul>
                    <li>Interior Furniture</li>
                    <li>Exterior Furniture</li>
                    <li>Custom Built Projects</li>
                    <li>Cutting Boards</li>
                    <li>Charcuterie Boards</li>
                </ul>
            </div>

            {
                router.pathname == '/' &&
                <div className='Footer-Card'>
                    <h1>Quick Links</h1>
                    <ul>
                        <li onClick={()=>{location.href = '#Top'}}>Home</li>
                        <li onClick={()=>{location.href = '#Services'}}>Find The Best Fist For Your Home</li>
                        <li onClick={()=>{location.href = '#Contact'}}>Contact</li>
                    </ul>
                </div>
            }
            
        </footer>
    </div>
  )
}

export default Footer