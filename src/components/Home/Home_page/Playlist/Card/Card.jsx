import React from 'react'
import { Link } from 'react-router-dom'
import {card,text,fake_button,container} from './Card.module.css'
const Card = ({playlist})=>{
            
    return<div className={container}>
    <Link to={`/playlist/${playlist.id}`}><div className={card}>
        
            <img src={playlist.images[0].url}></img> 
            <div className={text}>{playlist.name}</div>
            <div className={fake_button}></div>
            
    </div></Link>
    </div>
   
}

export default Card