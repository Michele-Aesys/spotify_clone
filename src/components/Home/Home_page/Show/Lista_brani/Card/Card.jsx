import React from 'react'
import { Link } from 'react-router-dom';
import {card,image_container,album_title,artist,container} from './Card.module.css'
const Card = ({brano})=>{
    console.log(brano);
    return <div className={container}>
        <Link to={`/playlist/${brano.id}`}>
        <div className={card} style={{color:"white"}}>
        <div className={image_container}><img src={brano.images[0].url} ></img></div>
        <div className={album_title}>{brano.name}</div>
        <div className={artist}>{
                    brano.artist?
                        brano.artists.map(elem=>elem.name)
                        :
                        brano.name
        }</div>
    </div></Link>
</div>
}

export default Card