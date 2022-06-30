/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import residenceList from '../Data/ResidenceList'

const Residence = () => {
  return (
    <div className='residence'>
        <div className='residence-title'>
            <h4>Popular</h4>
            <div className='residence-title-sub'>
                <h1>Our popular residence</h1>
                <a href="#">Explore All <FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
        </div>
        <div className='structure-grid'>
            {residenceList.map((residence, index) => {
                return (
                <div className='structure-card-1' key={index}>
                    <div className='structure-img'>
                        <img src={residence.img} alt="" />
                    </div>
                    <div className='structure-body'>
                    <div className='structure-location'>
                            <img src={residence.ico_1} alt="" />
                            <p>{residence.location}</p>
                        </div>
                        <div className='structure-options'>
                            <div>
                                <img src={residence.ico_3} alt="" />
                                <p>4 Bed</p>
                            </div>
                            <div>
                                <img src={residence.ico_2} alt="" srcset="" />
                                <p>10x10</p>
                            </div>
                            <div>
                                <img src={residence.ico_2} alt="" srcset="" />
                                <p>2000m²</p>
                            </div>
                        </div>
                        <div className='buy-now'>
                            <button className='button-search' type='button'>Buy Now</button>
                            <p>{residence.price}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Residence