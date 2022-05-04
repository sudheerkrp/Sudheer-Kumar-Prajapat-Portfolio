import React, {useState} from 'react';

import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name : '', email : '', message : ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;
  const handelChangeInput = (event)=>{
    const {name, value} = event.target; 
    setFormData({ ...formData, [name] : value}); // Modern React Destructuring Syntax
  }
  const handelSubmit = ()=>{
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    
    // console.log('Thanks');

    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);
    }).catch((error)=>console.log(error));
  }
  

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt='email'/>
          <a href="mailto:example@gmail.com" className='p-text'>example@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt='mobile'/>
          <a href="tel: 9876543210" className='p-text'>9876543210</a>
        </div>
      </div>

      {(!isFormSubmitted)?(
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className='p-text' placeholder='Your name' name='name' value={name} onChange={handelChangeInput}/>
          </div>
          <div className="app__flex">
            <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handelChangeInput}/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder='Your Message'
              value={message} 
              name='message'
              onChange={handelChangeInput}
            ></textarea>
          </div>
          <button type='button' className="p-text" onClick={handelSubmit}>{(loading)?('Sending'):('Send Message')}</button>
        </div>):(
        <div>
          <h3 className="head-text">Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whiteBg');