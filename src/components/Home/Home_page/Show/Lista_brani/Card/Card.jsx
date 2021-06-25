import React from 'react'
import {card,image_container,album_title,artist} from './Card.module.css'
const Card = ({brano})=>{
    return <div className={card} style={{color:"white"}}>
        <div className={image_container}><img src={brano.images[0].url} ></img></div>
        <div className={album_title}>{brano.name}</div>
        <div className={artist}>{
                    brano.artist?
                        brano.artists.map(elem=>elem.name)
                        :
                        brano.name
        }</div>
    </div>
}

export default Card