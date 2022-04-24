import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter></BsTwitter>
        </div>
        <div>
            <BsInstagram></BsInstagram>
        </div>
        <div>
            <FaFacebook></FaFacebook>
        </div>
    </div>
  )
}

export default SocialMedia;