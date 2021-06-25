import React from 'react'
import {card,text,fake_button} from './Card.module.css'
const Card = ({playlist})=>{
            
    return <div className={card}>
            <img src={playlist.images[0].url}></img>
            <div className={text}>{playlist.name}</div>
            <div className={fake_button}></div>
    </div>
}

export default Card