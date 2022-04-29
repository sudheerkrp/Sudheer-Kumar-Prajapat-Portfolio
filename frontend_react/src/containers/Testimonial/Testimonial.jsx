import React, {useState, useEffect} from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handelClick = (index)=>{
    setCurrentIndex(index);
  }

  useEffect(()=>{
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data)=>{
      // console.log(data);
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data)=>{
      setBrands(data);
    });
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imageUrl)} alt='testimonial'/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btn app__flex">
            <div className="app__flex" onClick={()=>{handelClick((currentIndex === 0)?(testimonials.length-1):(currentIndex-1))}}>
              <HiChevronLeft></HiChevronLeft>
            </div>
            <div className="app__flex" onClick={()=>{handelClick((currentIndex === testimonials.length-1)?(0):(currentIndex+1))}}>
              <HiChevronRight></HiChevronRight>
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {brands.map((brand)=>{
          return (
            <motion.div
              whileInView={{opacity : [0, 1]}}
              transition={{duration : 0.5, type : 'tween'}}
              key = {brand._id}
            >
              <img src={urlFor(brand.imageUrl)} alt={brand.name}/>
            </motion.div>
          );
        })}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primaryBg');