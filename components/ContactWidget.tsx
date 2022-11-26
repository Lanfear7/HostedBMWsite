import Link from 'next/link'
import React from 'react'

function ContactWidget() {
  return (
    <div className='Contact-Widget' id='Contact'>
        <div className='Contact-About'>
          <h2>Transform Your Home</h2>
            <h1>Get A Quote Today</h1>
            <p>A custom built piece of furniture can turn any boring room into the highlight  of your home. Take the first  step and see how much of a difference real wooden furniture will make in your home.</p>  
        </div>
        <div className='Contact-Info'>
          <Link href='/contact'><button>Get A Quote</button></Link>
          <h1>Call us at: (604)-916-1811</h1>
        </div>
        
    </div>
  )
}

export default ContactWidget