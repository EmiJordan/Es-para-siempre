import React, { useEffect, useState, useRef } from 'react'
import confetti from "canvas-confetti"
import { cardData } from '../components/InfoCard/cardData'
import { InfoCard } from '../components/InfoCard/InfoCard'
import './Home.css'
import { useNavigate } from 'react-router'

export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const botonRef = useRef(null);

    const navigate  = useNavigate()

    useEffect(()=> {
        confetti({
            origin:{
                x:0.25,
            }
        })
        confetti({
            origin:{
                x:0.75
            }
        })
      },[])

    const [count,setCount] = useState(0)
    const respuestaNo = () =>{
       if (count==0) {
            alert(`
Pues muy tarde estúpida, ya eres mi novia 💋
Además, suerte tratando de apretar "NO" devuelta 😈`)
       }
       else{
        
       }
       setCount(count+1)  
    }

    const respuestaSi = () =>{
        navigate('cita')
    }

    const [textoSi, setTextoSi] = useState("SI")
    const [textoNo, setTextoNo] = useState("NO")

    useEffect(()=> {
        if (textoNo!="NO") {
            document.body.classList.toggle('fondo-no')
            const audio = new Audio('/audio-meme.mp3')
            audio.play()
        }
        else{
            const timer = setTimeout(() => {
                document.body.classList.remove('fondo-no')
            }, 200);
        }

        if (count>0) {
            const boton = botonRef.current;
            boton.classList.add('button-no')

            const maxWidth = window.innerWidth - boton.offsetWidth;
            const maxHeight = window.innerHeight - boton.offsetHeight;

            const randomX = window.scrollX + Math.random() * maxWidth;
            const randomY = window.scrollY + Math.random() * maxHeight;

            boton.style.position = 'absolute';
            boton.style.left = `${randomX}px`;
            boton.style.top = `${randomY}px`;
        }
    }, [textoNo])

    const pretendeSi = () =>{
        setTextoSi("😁😘")
    }
 
    return (
        <>
          <main>
            <h1>FELICES 3 AÑOS MI VIDAAA</h1>
            <p>Gracias por compartir tanto tiempo de tu vida junto a mí :), me hacés el hombre más feliz del mundo y me enamorás cada día más, sos el amor de mi vida</p>
            <img src="/pinguinos-2.gif" alt="" />
          </main>
    
          <section className='tarjetas-amor'>
            <h2>Aquí tienes unas tarjetitas con mucho amor ❤️❤️</h2>
            <div className='cards'>
                {cardData.map((c, i)=>{
                return (
                    <InfoCard img={c.img} info={c.info} key={i} />
                )
                })}
            </div>
          </section>
    
    
          <section className='cita'>
            <h2>¿Quieres tener una cita conmigo?</h2>
            <div className='buttons'>
              <button onClick={respuestaSi} onMouseEnter={pretendeSi} onMouseLeave={()=>{setTextoSi("SI")}}>{textoSi}</button>
              <button 
                ref={botonRef}
                className='button-no'
                onClick={respuestaNo} 
                onMouseEnter={()=>{setTextoNo("💀💀")}} 
                onMouseLeave={()=>{setTextoNo("NO")}}
              >  
                {textoNo}
              </button>  
            </div>
          </section>
        </>
      )
}