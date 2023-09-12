import React from 'react'

const Entreprise = () => {
    const style = {
        // border:"2px solid",
        // width:"90%",
    }
    return (

        <>
            <h1 className='entreprise text-center mt-5'>Entreprise visitées</h1>
      
            <div className="container mt-3">
                <div className=" containerEntreprise d-flex justify-content-around" >
                 
                        <h2 className='entrepriseItems' data-aos="zoom-in-up" data-aos-duration="1000">
                            <span  style={{ color: "orange" }}>Orange </span>  Digital Center
                        </h2>
                    
                    
                        <h2 className='entrepriseItems' data-aos="zoom-in-down" data-aos-duration="1000">
                            <span style={{ color: "orange" }}>Orange </span>  Digital Center
                        </h2>
                    
                   
                        <h2 className='entrepriseItems' data-aos-duration="1000" data-aos="zoom-in-left">
                            <span style={{ color: "orange" }}>Orange </span>  Digital Center
                        </h2>                    
                   </div> 
            </div>


        </>
    )
}

export default Entreprise
