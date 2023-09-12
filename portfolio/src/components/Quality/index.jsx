import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faListCheck, faWrench ,faFlask} from '@fortawesome/free-solid-svg-icons';

import p90 from '../../images/p90.png'
import p80 from '../../images/p80.png'
import p85 from '../../images/p85.png'
// import p975 from '../../images/p90.png'
const Quality = () => {

    const [left,setLeft] = useState('');
  

        const style = {
        position: "absolute",
        
        left: left,
        height: "30px"
    }
    return (
        <div className="containerQualit">

            <div className="container ">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-down-right">

                        <h2>Colonne 1</h2>
                        <p>Contenu de la première colonne.</p>
                    </div>
                    <div className="col-md-6" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                           
                        <h2 id='name'>Elaboration d’un beau code pour un utilisateur transparent</h2>
                        <p className=' mt-3 mb-3'> un développeur web passionné avec 2 ans d'expérience dans la création de sites web Mon parcours
                            est marqué par une curiosité insatiable pour la technologie, qui m'a conduit à me plonger dans le monde du codage .
                            Je suis spécialisé dans le développement
                            front-end et back-end.</p>
                        <div>
                        <div className="fa d-flex position-relative">
                            <h3 className='qualitiesTitle'>Html</h3>
                            <img src={p90} style={{...style,left:"87%"}} alt="" />
                        </div>
                            <progress className="custom-progress" value="90" max="100"></progress>
                        </div>
                        <div> 
                        <div className="fa d-flex position-relative">
                            <h3 className='qualitiesTitle'>Css</h3>
                            <img src={p85} style={{...style,left:"82%"}} alt="" />
                        </div>
                            <progress className="custom-progress" value="85" max="100"></progress>
                        </div>
                        <div>
                        <div className="fa d-flex position-relative">
                            <h3 className='qualitiesTitle'>JavaScript</h3>
                            <img src={p80} style={{...style,left:"77%"}} alt="" />
                        </div>
                            <progress className="custom-progress" value="80" max="100"></progress>
                        </div>
                        <div>
                        <div className="fa d-flex position-relative">
                            <h3 className='qualitiesTitle'>Php,laravel</h3>
                            <img src={p80}   style={{...style,left:"77%"}} alt="" />
                        </div>
                            <progress className="custom-progress" value="80" max="100"></progress>
                        </div>
                        <div>
                            <div className="fa d-flex position-relative">

                                <h3 className='qualitiesTitle'>React Js</h3>
                                <img src={p80}  style={style} alt="" />
                                    {/* <FontAwesomeIcon icon={faMessage}  values='7%' /> */}
                            </div>
                            <progress className="custom-progress" value="75" max="100"></progress>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row contenteBox gutter-4 ">

                    <div className="col-md-3  boxs text-center " >
                        <h2>01 <FontAwesomeIcon icon={faFlask} /></h2>
                        <h4>an d'expérience</h4>
                    </div>
                    <div className="col-md-3 boxs text-center">
                        <h2>02 <FontAwesomeIcon icon={faUsers} /></h2>
                        <h4>clients satisfaire</h4>
                    </div>
                    <div className="col-md-3 boxs text-center">
                        <h2>04 <FontAwesomeIcon icon={faListCheck} /></h2>
                        <h4>projets terminés</h4>
                    </div>
                    <div className="col-md-3 boxs text-center">
                        <h2>02 <FontAwesomeIcon icon={faWrench} /></h2>
                        <h4>formations</h4>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default React.memo (Quality)
