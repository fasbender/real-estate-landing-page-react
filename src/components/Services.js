import React from 'react'
import serviceList from '../Data/ServiceList'

const Services = () => {
  return (
    <div className='services'>
        <div className='service-title'>
            <h1>Why choose us</h1>
            <p>Our goal is at the heart of all that we do. We make our clients happiness our sole priority.</p>
        </div>
        <div className='service-grid'>
            {serviceList.map((service, index) => {
                return(
                    <div className='service-container'>
                        <div className='service-heading'>
                            <img src={service.img} alt="" />
                            <p>{service.title}</p>
                        </div>
                        <div className='service-body'>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services