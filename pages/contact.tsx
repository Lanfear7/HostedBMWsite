import React, { useRef as UseRef, useState as UseState} from 'react';
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser';
import cuttingBoard from '../public/portfolio/End-Grain-Cutting-Board.png'
import Footer from '../components/Footer';

function contact() {

    const form = UseRef<HTMLFormElement | null>(null);

    const [firstName, setFirstName] = UseState<string>('');
    const [lastName, setLastName] = UseState<string>('');
    const [email, setEmail] = UseState<string>('');
    const [phoneNumber, setPhoneNumber] = UseState<string>('');
    const [city, setCity] = UseState<string>('');
    const [zipCode, setZipCode] = UseState<string>('');
    const [province, setProvince] = UseState<string>('');
    const [message, setMessage] = UseState<string>('');
    const [errorMessage, setErrorMessage] = UseState<string>('');

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let emailForm = form.current || ''
        console.log(emailForm)
        if(firstName && lastName && email && phoneNumber && city && zipCode && province && message !== ''){
            emailjs.sendForm('service_flqtubs', 'template_89ukjgq', emailForm, 'XzW7atLHKswzKai9U')
            .then((result) => {
              console.log(result.text);
              if(result.text == 'ok'){
                  setEmail('')
                  setLastName('')
                  setLastName('')
                  setPhoneNumber('')
                  setCity('')
                  setZipCode('')
                  setProvince('')
                  setMessage('')
                  setErrorMessage('')
              }
            }, (error) => {
                console.log(error.text);
            });
        }else{
            setErrorMessage('Please fill out the entire form')
        } 
      };


  return (
    <>
        <Navbar />
        <div className='Contact-Container'>
            <div className='Contact-Image'>
                <figure>
                    <img src={cuttingBoard.src}></img>
                </figure>
            </div>
            <div className='Contact-Form-Container'>
                <div className='Contact-Form'>
                    <h1>Tell Us About Your Dream</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input name='first_name' onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder='First Name' />
                        <input name='last_name' onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder='Last Name' />
                        <input name='client_email' onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' />
                        <input name='client_phone_number' onChange={(e)=>{setPhoneNumber(e.target.value)}} type="text" placeholder='Phone Number' />
                        <input name='city' onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder='City' />
                        <input name='zip_code' onChange={(e)=>{setZipCode(e.target.value)}} type="text" placeholder='Zip Code' />
                            <div className='Select-Container'>
                                <select name='province' onChange={(e)=>{setProvince(e.target.value)}}>
                                    <option value='BC' selected={true}>BC</option>
                                    <option value='AB'>AB</option>
                                    <option value='SK'>SK</option>
                                    <option value='MB'>MB</option>
                                    <option value='ON'>ON</option>
                                    <option value='QC'>QC</option>
                                    <option value='NL'>NL</option>
                                    <option value='NB'>NB</option>
                                    <option value='NS'>NS</option>
                                    <option value='PEI'>PEI</option>
                                    <option value='YT'>YT</option>
                                    <option value='NT'>NT</option>
                                    <option value='NU'>NU</option>
                                </select>
                            </div>
                            
                        <textarea name='message' onChange={(e)=>{setMessage(e.target.value)}} placeholder='Message'></textarea>
                        <input className='Submit' type='submit' value='Submit' />
                    </form>
                    {
                        errorMessage &&
                        <h2>{errorMessage}</h2>
                    }
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default contact