import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import './Cita.css'

export const Cita = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate()

    return (
        <>
            <section className="main">
                <h1>HAS ACEPTADO UNA CITA PARA CENAR CONMIGO :)</h1>
                <p>Muchas gracias por aceptar (no tenías otra opción), aquí abajo te dejo la información que requieres y un video para recordate lo que siento por tí</p>
                <video src="te-amoo.mp4" width="250px" controls autoplay> </video>
            </section>

            <section className='info'>
                <h2>Información de la cita</h2>
                <div className='info__card-cita'>
                    <div className='info__card-texto'>
                        <p className='info-nombre'>VALENTINA</p>
                        <p>Te invito a festejar nuestro aniversario :)</p>
                    </div>
                    <div className='info__card-datos'>
                        <p>📅<span>Fecha:</span> 06/05/2025</p>
                        <p>⌚<span>Hora:</span> 18:00hs</p>
                        <p>📍<span>Lugar:</span> <a href="https://www.youtube.com/watch?v=BtLSaxRnIhc" target='_blank'>Aquí es, ansiosa :)</a></p>
                    </div>
                    <div className='info__card-texto'>
                        <p>Vente bien hermosa como siempre y con esa sonrisa que tan feliz me hace</p>
                        <p>TE AMOOO</p>
                    </div>
                </div>
            </section>

            <section className='button'>
                <button onClick={()=>{navigate('/')}}>VOLVER AL INICIO ❤️</button>
            </section>
        </>
    )
}