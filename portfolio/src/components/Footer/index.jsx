import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div>
            {/* <hr /> */}
            <div className=" mt-5 footer ">
                <div className="row">
                    <div className="col-lg-6">Kouadja Richmond Koua</div>
                    <div className="col-lg-6">
                    
                    {/* <FontAwesomeIcon icon={faFacebook} style={{color: "#2263d3",}} /> */}
                    {/* <FontAwesomeIcon icon={faInstagram} style={{background: "linear-gradient(to right, #833AB4, #C13584, #E1306C, #FD1D1D)"}} />
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#2e4c7f",}} /> */}
                    </div>
                </div>
                <div className="row containerFooter  ">
                    <div className="col-md-3 contentFooter">
                        <h2 className='footerTitle' >Liens</h2>
                        <ul>
                            <li><a href="">Accueil</a></li>
                            <li><a href="">A propos</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Clients</a></li>
                            <li><a href="">Projeets</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>

                    </div>
                    <div className="col-md-3 contentFooter">
                        <h2  className='footerTitle'>Services</h2>
                        <ul>
                            <li><a href="">Front-end</a></li>
                            <li><a href="">Back-end</a></li>
                            <li><a href="">Mobile</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 contentFooter">
                        <h2 className='footerTitle'>Contacter-moi</h2>
                        <ul>
                            <li><a href="">Mon GuitHub</a></li>
                            <li><a href="">Email</a></li>
                            {/* <li><a href="">Recrute moi</a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2 className='footerTitle'>Mes cours</h2>
                        <ul>
                            <li><a href="">HTML && CSS</a></li>
                            <li><a href="">JavaScript</a></li>
                            <li><a href="">React js</a></li>
                            <li><a href="">PHP && SQL</a></li>
                        </ul>
                    </div>
                </div>
                <hr style={{color:"white"}} />
            </div>
        </div>
    )
}

export default Footer
