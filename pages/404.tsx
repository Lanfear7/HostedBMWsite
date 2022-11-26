import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function FourOhFour() {
  return <>
    <Navbar />
    <div className='NotFoundPageContainer'>
        <h1>404 - Page Not Found</h1>
    </div>
  </>
}