import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BMW_Logo from '../public/Logo-Transparent.png'
import InstagramImage from '../public/Instagram-Logo.png'
import InstagramImageHover from '../public/Instagram-Logo-Hover.png'

function Navbar() {

    const [fbHover, setFbHover] = useState(false)
    const [InstagramHover, setInstagramHover] = useState(false)

    useEffect(()=>{
        setFbHover(false)
        setInstagramHover(false)
    },[])

    const router = useRouter()
    console.log(router.pathname);
  return (
    <div className='Navbar-Container' id='Top'>
        <div className='links'>
            <figure className='Logo'>
                <Link href='/'>
                    <img src={BMW_Logo.src}></img>
                </Link>
            </figure>
            <div className='socialmedia'>
                    <figure className='Instagram' onMouseEnter={()=>{setInstagramHover(true)}} onMouseLeave={()=>{setInstagramHover(false)}}>
                        {
                            InstagramHover  ?   <Link href='https://www.instagram.com/blue_monkeys_woodworking/?next=%2F'>
                                                    <img src={InstagramImageHover.src}></img>
                                                </Link>
                                            :   <Link href='https://www.instagram.com/blue_monkeys_woodworking/?next=%2F'>
                                                    <img src={InstagramImage.src}></img>
                                                </Link>
                        }
                    </figure>
            </div>
        </div>
        <nav>
            {
                router.pathname == '/' &&
                <ul>
                    <Link href='/gallery'><h2>Gallery</h2></Link>
                    <Link href='/about'><h2>About</h2></Link>
                    <Link href='/contact'><h2>Contact</h2></Link>
                </ul>
            }
            {
                router.pathname == '/gallery' &&
                <ul>
                    <Link href='/'><h2>Home</h2></Link>
                    <Link href='/about'><h2>About</h2></Link>
                    <Link href='/contact'><h2>Contact</h2></Link>
                </ul>
            }
            {
                router.pathname == '/about' &&
                <ul>
                    <Link href='/'><h2>Home</h2></Link>
                    <Link href='/gallery'><h2>Gallery</h2></Link>
                    <Link href='/contact'><h2>Contact</h2></Link>
                </ul>
            }
            {
                router.pathname == '/contact' &&
                <ul>
                    <Link href='/'><h2>Home</h2></Link>
                    <Link href='/gallery'><h2>Gallery</h2></Link>
                    <Link href='/about'><h2>About</h2></Link>
                </ul>
            }
            {
                router.pathname == '/404' &&
                <ul>
                    <Link href='/'><h2>Home</h2></Link>
                </ul>
            }
        </nav>
    </div>
  )
}

export default Navbar
