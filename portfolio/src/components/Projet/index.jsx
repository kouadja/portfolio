import React from 'react'
import projet1 from '../../images/projet1.webp'
import projet2 from '../../images/projet2.jpeg'
import projet3 from '../../images/projet3.webp'

const Projet = () => {
  const refBtn1 = React.createRef(null)
  const refBtn2 = React.createRef(null);
  const refBtn3 = React.createRef(null);

  const handleMouseEnter1 = () => {
    setTimeout(() => {
      refBtn1.current.classList.value = "btnShow"
    }, 400)
  }
  const handleMouseEnter2 = () => {

    setTimeout(() => {
      refBtn2.current.classList.value = "btnShow"
    }, 400)
  }
  const handleMouseEnter3 = () => {

    setTimeout(() => {
      refBtn3.current.classList.value = "btnShow"
    }, 400)
  }
  const handleMouseLeave1 = () => {
    setTimeout(() => {
      refBtn1.current.classList.value = "btn"
    }, 400)
  }

  const handleMouseLeave2 = () => {
    setTimeout(() => {
    refBtn2.current.classList.value = "btn"
    }, 400)
  }

  const handleMouseLeave3 = () => {
    setTimeout(() => {
      refBtn3.current.classList.value = "btn"
    }, 400)
  }


  // console.log(refBtn2)
  // console.log(refBtn3)
  return (
    <div className="container" >
      <h1 className='text-center mb-5 mt-5' id>MES PROJETS</h1>
      <div className="containerProjet justify-content-around" >

        <div className="containerPotail " onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <img src={projet1} alt="" className='img' />
          <button className="btn" id='1' ref={refBtn1} style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }}>Lire plus</button>
        </div>


        <div className="containerPotail" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <img src={projet2} alt="" className='img' />

          <button className="btn" id='2' ref={refBtn2} style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }}>Lire plus</button>

        </div>
        <div className="containerPotail" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <img src={projet3} alt="" className='img' />
          <button className="btn" id='3' ref={refBtn3} style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }}>Lire plus</button>


        </div>
      </div>
    </div>











  )
}

export default Projet
