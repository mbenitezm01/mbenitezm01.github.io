import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Skills.css'

const Skills = () => {

    useEffect(() => {
        AOS.init();
      }, []); 

    return (
        <section id="skills">
            <div class="container">
                <h2 data-aos='fade-up'>Conocimientos</h2>
                <ul data-aos='fade-up'>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>Unity</li>
                    <li>Git</li>
                </ul>
            </div>
        </section>
    )
}
export default Skills