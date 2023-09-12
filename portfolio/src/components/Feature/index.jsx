import React, { useEffect } from 'react'
import '../../style/style.css'
import Btn from '../Elements/Btn'
import photo1 from '../../images/photo1.png'

const Feature = () => {




    return (
        <div className='mainf'>
            <div className="container  feature" >
                <div className="row ">
                    <div className="col-md-6 mt-5 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">

                  <img src={photo1} style={{minWidth : "300px"}} alt="" />
                    </div>
                    <div className="col-md-6 featureSelf" data-aos="fade-down" data-aos-duration="3000">
                        <h3 id='hello'> Salut je suis </h3>
                        <h1 id='name'>Kouadja Richmond Koua</h1>
                        <h3 id='job'>Developpeur web</h3>
                        <p className='descriptionFeature mt-3 mb-5'>Je suis développeur Full-Stack j‘utilise
                            mes connaissances en HTML,CSS
                            ,jS,LARAVEL,REACT JS ...pour donner vie à
                            vos idées avec un souci du détail et mettant
                            accent sur la satisfaction de vos besoins</p>
                       <Btn>Prenez contact</Btn>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature
