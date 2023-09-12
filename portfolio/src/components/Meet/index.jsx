import React from 'react'

const Meet = () => {
    return (
        <div className='container mt-5'>
            <h1 id='name' className='text-center mb-5'>Prendre un rendez-vous</h1>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <form>
                        <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label qualitiesTitle">Nom et Prenom</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label qualitiesTitle">Email </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label qualitiesTitle">Méssage</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' style={{ padding: "10px 20px", backgroundColor: "#0f3d98", color: "white", border: "none" }} >Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <iframe className="rounded-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8203207416327!2d-4.001420924152115!3d5.290713994687558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1e95a7230b815%3A0xb42441cd6ea4939c!2sECOLE%20SUP%C3%89RIEURE%20AFRICAINE%20DES%20TIC%20(%20ESATIC)!5e0!3m2!1sfr!2sci!4v1689131416007!5m2!1sfr!2sci" style={{width:"100%", height:"400px",border:0}}   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet
