import React from 'react'
import slide from '../../images/slide.jpg'
import orange from '../../images/orange.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';

const Client = () => {
    return (
        <div className="containerCl ">

        <div className="container " >
            <h1 id='name' className='text-center'>Que disent nos clients </h1>
            <div className="contentClient" >
                <div className="clientBx" data-aos="fade-left" data-aos-duration="1000">
                    <div className="stars">
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar}  style={{color: "#ffc800",}} />
                    </div>
                    <div className="comments">
                        <p> 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className="profilClient">
                        <img className='clientImage' src={slide} alt="" />
                        <div className="detailClient">
                            <h5>Kouadja Richmond</h5>
                            <h6>position,Compagny name</h6>
                        </div>
                    </div>
                </div>
                <div className="clientBx" data-aos="fade-down" data-aos-duration="1000">
                    <div className="stars">
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar}  />


                    </div>
                    <div className="comments">
                        <p> 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className="profilClient">
                        <img className='clientImage' src={slide} alt="" />
                        <div className="detailClient">
                            <h5>Kouadja Richmond</h5>
                            <h6>position,Compagny name</h6>
                        </div>
                    </div>
                </div>
                <div className="clientBx" data-aos="fade-right" data-aos-duration="1000">
                    <div className="stars">
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} />
                    <FontAwesomeIcon icon={faStar}  />
                    </div>
                    <div className="comments">
                        <p> 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className="profilClient">
                        <img className='clientImage' src={slide} alt="" />
                        <div className="detailClient">
                            <h5>Kouadja Richmond</h5>
                            <h6>position,Compagny name</h6>
                        </div>
                    </div>
                </div>
                
                {/* <div className="clientBx"></div>
                    <div className="clientBx"></div> */}
            </div>
        </div>
        </div>


    )
}

export default Client




