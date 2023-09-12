import React from 'react'

const Parcours = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Education</h2>

                    </div>
                    <div className="col-md-6">
                        <h2 id='hidden'>Résumé</h2>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6 containerRoute">
                    <div className="firstContente position-relative">
                        <div className='circle cle1'></div>
                        <div className='circle cle2'></div>
                        <div className='circle cle3'></div>
                        <div className='circle cle4'></div>
                        {/* <div className='circle cle5'></div> */}
                    </div>

                    <div className="containerPacours" data-aos-duration="1000"   data-aos ="fade-down" >

                        <div className="parcours">
                            <h4 id='name'  >Ecole Superieur Africaine des TICs </h4>
                            <h6 className='h6'>Initialisation à l’ informatique</h6>
                            <p className='paragraph'>Première année de Licence en Système informatique Réseaux et Télécommunication .</p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>Ecole Superieur Africaine des TICs </h4>
                            <h6 className='h6'>Modélisation et Programmation</h6>
                            <p>Deuxième année de Licence en Système informatique Génie Logiciel .</p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>Orange Digital Center </h4>
                            <h6 className='h6'>Initialisation à l’ informatique</h6>
                            <p>Theme:Mise en place d’une application web de bout en bout</p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>Formation web </h4>
                            <h6 className='h6'>Initialisation à l’ informatique</h6>
                            <p>j’ai obtenu une licence en Système Informatique et Génie Logiciel (SIGL)</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 containerRoute">
                    <div className="firstContente position-relative ">
                    <div className='circle cleR1'></div>
                        <div className='circle cleR2'></div>
                        <div className='circle cleR3'></div>
                        <div className='circle cleR4'></div>
                        
                    </div>

                    <div className="containerPacours dnone">

                        <div className="parcours">
                            <h4 id='name'>2021 - 2022</h4>

                            <p>J'ai renforcé mes compétences en Mathématique ,Physique  et en Algorithmique. </p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>2021 - 2022</h4>
                            <p>J'ai appris à modélisé les systèmes d informations grâce MERISE et le Langage UML,à l implémentation des projets grâce aux langages de programmation tels que Java ,C++,SQL... </p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>2021 - 2022 </h4>
                            <p>J'ai appris à mettre en place une application web grâce à plusieurs outils.
                                Dans cette même veine j'obtenus  une certification de formation.</p>
                        </div>
                        <div className="parcours">
                            <h4 id='name'>Formation web </h4>
                            <p>j'ai obtenu une licence en Système Informatique et Génie Logiciel (SIGL)</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Parcours
