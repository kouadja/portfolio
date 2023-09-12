import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobile, faRuler, faPalette } from '@fortawesome/free-solid-svg-icons';
import direction from '../../images/direction.png'
import directionLeft from '../../images/directionlLeft.png'
import Framer from '../../Framer/Framer';
const Knowlage = () => {
    const handleMouse = (e) => {

    }
 

    return (
        <>

            {/* <h1 className='text-center mt-5'>Mes competances</h1> */}
            <div className="containers container">
                {/* <FontAwesomeIcon icon="fa-light fa-message" /> */}

                <div className="bloc1" data-aos-duration="2000">


                    <div className="direction d-flex" data-aos="fade-right" data-aos-duration="1000">
                        <div className="elementbloc1 one"  >
                            <h3 id='name'>Html</h3>
                            <p className='paras' > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptas nesciunt officiis nobis adipisci aspernatur porro natus consequuntur soluta alias
                                sequi accusamus mollitia, rem, deleniti iusto.</p>
                            <button style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }} onMouseEnter={handleMouse}>Lire plus</button>
                        </div>
                        <img src={direction} className='directionImage' alt="direction-right" />
                    </div>


                    <div className="direction d-flex " data-aos="fade-right" data-aos-duration="1000">
                        <div className="elementbloc1 two" data-aos="fade-right" data-aos-duration="1000">

                            <h1 id='name'>CSS</h1>
                            <p >3Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nesciunt officiis nobis
                                adipisci aspernatur porro natus consequuntur soluta alias sequi accusamus mollitia, rem, deleniti iusto.</p>
                            <button style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }} onMouseEnter={handleMouse}>Lire plus</button>

                        </div>
                        <img src={direction} className='directionImage two ' alt="direction-right" />
                    </div>


                </div>


                <div className="centerbar c">
             
                    <div className="un etapes" data-aos="fade-up" ><h1 className="ecriture"><FontAwesomeIcon className='fa' icon={faRuler} style={{ color: "#050505", height: "20px", width: "100%", }} /></h1></div>
                    <div className="deux etapes" data-aos="fade-up" data-aos-duration="2000"><h1 className="ecriture"><FontAwesomeIcon className='fa' icon={faPalette} style={{ color: "#050505", height: "20px", width: "100%", }} /></h1></div>
                    <div className="trois etapes" data-aos="fade-up" ><h1 className="ecriture"><FontAwesomeIcon className='fa' icon={faCode} style={{ color: "#0a0a0a", height: "19px", width: "100%", }} /></h1></div>
                    <div className="quatre etapes" data-aos="fade-up" ><h1 className="ecriture"><FontAwesomeIcon className='fa' icon={faMobile} style={{ color: "#050505", height: "22px", width: "100%", }} /></h1></div>
                </div>


                <div className=" bloc1 bloc2"   >
                    <div className="direction d-flex " data-aos="fade-left" data-aos-duration="2000">
                        <img src={directionLeft} className='directionImage leftDirection ' alt="" />
                        <div className="elementbloc2 ">
                            <h1 id="name">Php</h1>
                            <p >2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo totam sed consectetur voluptatibus ipsam culpa deleniti voluptatum maiores recusandae illum earum officia, consequuntur facilis.</p>
                            <button style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }} onMouseEnter={handleMouse}>Lire plus</button>

                        </div>
                    </div>

                    <div  className="direction d-flex " data-aos="fade-left" data-aos-duration="2000">
                        <img src={directionLeft} className='directionImage leftDirection' alt="" />
                        <div className="elementbloc2 two" >
                            <h1 id="name">JavaScript</h1>
                            <p >4Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Voluptas nesciunt officiis nobis adipisci aspernatur porro natus consequuntur soluta alias sequi accusamus mollitia, rem, deleniti iusto.</p>
                            <button style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }} onMouseEnter={handleMouse}>Lire plus</button>
                        </div>
                    </div>


                </div>

            </div>

        </>




    )
}

export default Knowlage
