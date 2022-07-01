import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const TestimonialCard = ({ testimonialList }) => {
  return (
    <>
        {testimonialList.map((item, index) => {
            return(
                <motion.div className='testimonial-card' key={index}>
                    <div className='testimonial-header'>
                        <img src={item.img} alt="" />
                        <div className='testimonial-title'>
                            <p>{item.title}</p>
                            <small>{item.position}</small>
                        </div>
                        <div className='rating'>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                        </div>
                    </div>
                    <div className='testimonial-body'>
                        <p>{item.desc}</p>
                    </div>
                </motion.div>
            )
        })}
    </>
  )
}

export default TestimonialCard