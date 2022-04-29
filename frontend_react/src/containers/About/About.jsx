import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';
import {urlFor, client} from '../../client';

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "about"]';
    client.fetch(query).then((data)=>{
      setAbout(data);
    });

  }, []);

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
              <img src={urlFor(element.imageUrl)} alt={element.title}/>
              <h2 className="bold-text" style={{marginTop : 20}}>{element.title}</h2>
              <p className="p-text" style={{marginTop : 10}}>{element.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whiteBg');