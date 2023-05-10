import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

//Importacion de componentes
import Card from './Card'

//Importacion de imagenes
import Pokedex from '../../media/pokedex.png'
import AR from '../../media/ar.gif'
import Juego from '../../media/juego.png'
import Multiagentes from '../../media/multiagentes.png'
import Capaxcapa from '../../media/capaxcapa.png'
import HR from '../../media/hr.png'

import './Projects.css'

const Projects = () => {

    useEffect(() => {
        AOS.init();
      }, []); 

    return (
        <section id='projects'>
            <div class='container'>
                <h2 data-aos='fade-up'>Mis Proyectos</h2>
                <div class='projects'>
                    <Card name='Pokedex'
                        image={Pokedex}
                        description='Este es un sitio web desarrollado en React que utiliza la PokeAPI para permitir a los usuarios buscar información de un Pokémon en particular.'
                        link='https://github.com/mbenitezm01/pokedex-react-project'>
                    </Card>

                    <Card name='Aplicación de Realidad Aumentada'
                        image={AR}
                        description='Desarrollamos una aplicación móvil para IOS en Swift para el Museo Marco. Permite visulizar obras del museo escaneadas mediante fotogrametría en un ambiente de realidad aumentada.'>
                    </Card>

                    <Card name='Traffic Jam'
                        image={Juego}
                        description='En este proyecto construimos un videojuego utilizando el motor Unity. El objetivo del juego es navegar una ciudad entregando paquetes, todo mientras evitas chocar contra otros vehiculos.'
                        link='https://github.com/RodrigoGalvan/AtascoDeTraficoRep'>
                    </Card>

                    <Card name='Simulador de Tráfico con Multiagentes'
                        image={Multiagentes}
                        description='Utilizando Unity como motor gráfico, y la libreria agentpy de Python para realizar la simulación de los multiagentes, creamos una simulación de tráfico. Para la comunicación entre Python y Unity, utilizamos un servidor TCP/IP.'
                        link='https://github.com/mbenitezm01/MultiagentesReto'>
                    </Card>

                    <Card name='Servicio Social: Desarrollo Web'
                        image={Capaxcapa}
                        description='Como servicio social, trabajé en el desarrollo de un sitio web hecho en React para una organización que se busca impulsar la educación mediante tecnicas innovadoras de gamificación, con la producción de modelos de cartón que los niños pueden armar.'>
                    </Card>

                    <Card name='Aplicación Web para la Gestión de Recursos Humanos'
                        image={HR}
                        description='Un sistema de gestión de recursos humanos que desarrollamos para la empresa Ternium. Para construir la aplicación utilizamos React para el frontend, Express para el backend, y PostgreSQL para la base de datos.'>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default Projects