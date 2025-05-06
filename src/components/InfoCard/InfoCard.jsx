import { useEffect, useState } from 'react'
import './InfoCard.css'

export const InfoCard = ({info, img}) => {

    const [flipCard, setFlipCard] = useState(false)
    const className = flipCard ? 'info__card__inner flip' : 'info__card__inner'

    
    useEffect(()=>{
        if (flipCard && (img=='/brawl.png')) {
            const audioBrawl = new Audio('/emz.mp3')
            audioBrawl.play()
        }
    }, [flipCard])

    return (
        <div className="info__card">
            
            <div className={className} onClick={()=>{setFlipCard(!flipCard)}}>
                <div className='front__card'>
                    <img src={img} className='front__card-img'/>
                </div>
                <div className='back__card'>
                    <p className='back__card-text'>{info}</p>
                </div>
            </div>
            
        </div>
    )
}
