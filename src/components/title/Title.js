import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Title.css'

const Title = () => {

    useEffect(() => {
        AOS.init();
      }, []);      
    
    return (
        <section id='title'>
            <h1 data-aos='fade-up'>Bienvenido a mi Portafolio</h1>
            <p data-aos='fade-up' data-aos-delay='100'>Marcelo Benitez Molina</p>
            <a href='#projects' data-aos='fade-up' data-aos-delay='200'>Ver Proyectos</a>
        </section>
    )
}
export default Title