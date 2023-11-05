
// import './App.css';
import Header from '../Header';
import Feature from '../Feature';
import Entreprise from '../Entreprise';
import Knowlage from '../Aquis';
import Quality from '../Quality';
import Parcours from '../Parcours';
import Framer from '../../Framer/Framer';
import SearchMe from '../SearchMe';
import Client from '../Client';
import Projet from '../Projet';
import Meet from '../Meet';
import Footer from '../Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ScrollColorChange from '../Scroll';



function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <div>
    
    <Header/>
     <Feature/>
    <Framer/>
    { <Entreprise/> }
    <Knowlage/>
    <Quality/>
    {<Projet/> }
    {<Parcours/>}
    <SearchMe/>
    <Client/>
   {/* <Meet/> */}
  <Footer/>
  
    </div>
  );
}

export default App;
