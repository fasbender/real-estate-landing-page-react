import React, { useRef, useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import testimonialList from '../Data/TestimonialList'
import { motion } from 'framer-motion'

const Testimonials = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

  return (
    <div className='testimonial'>
        <div className='testimonial-top'>
            <p>Testimonials</p>
            <h1>What clients says</h1>
            <p>Our goal is at the heart of all that we do. We make our clients happiness our sole priority.</p>
        </div>
        <motion.div ref={carousel} drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className='carousel'>
            <TestimonialCard testimonialList={testimonialList}/>
        </motion.div>
    </div>
  )
}

export default Testimonials