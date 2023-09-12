import React from 'react'
import search from '../../images/search.jpg'
import Btn from '../Elements/Btn'
const SearchMe = () => {
   
    return (
        <div className="centerContainer mt-5 mb-5 ">
            <div className="containerSearch ">
                <div className="overlay">
                

                <h2 className="hiring text-center ">Avez-vous besoin de mon expertise ?</h2>
                    <p id='hiringText'className='text-center'>Avec 1ans d'expérience dans le développement web, j'ai développé mon expertise en front-end et back-end. je m'épanouir dans des environnements en évolution rapide, en tirant parti de mes solides compétences en résolution de problèmes et souci du détail pour dépasser vos attentes.</p>
                    <a href="#" className="image-button "><button className='btn btn-info'>Récrute moi</button></a>
                </div>
            </div>
        </div>


    )

}

export default SearchMe

