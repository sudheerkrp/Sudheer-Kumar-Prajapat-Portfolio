import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import {images} from '../../constants';
import './About.scss';

const about = [
  {title : 'Web Development', description : 'I am a good Web Developer.', imgUrl : images.about01},
  {title : 'Competitive Programming', description : 'I am a good Competitive Programming.', imgUrl : images.about02},
  {title : 'Arduino Programming', description : 'I am a good Arduino Programmer.', imgUrl : images.about03},
  {title : 'Date Structure and Algorithm', description : 'I know Date Structure and Algorithm very well.', imgUrl : images.about04},
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I know that <span>Good Development</span><br/>means  <span>Good Business</span>.</h2>
      <div className="app__profiles">
        {about.map((element, index)=>{
          return (
            <motion.div
              whileInView={{opacity : 1}}
              whileHover={{scale: 1.1}}
              transition={{duration : 0.5, type : 'tween'}}
              className='app__profile-item'
              key={element.title + index}
            >
              <img src={element.imgUrl} alt={element.title}/>
              <h2 className="bold-text" style={{marginTop : 20}}>{element.title}</h2>
              <p className="p-text" style={{marginTop : 10}}>{element.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  )
}

export default About;