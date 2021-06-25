import React, { useEffect, useState } from 'react'
import Card from './Card/Card';
import {lista,title,card_container} from './Lista_brani.module.css'
import { searchByCategory } from '../../../../../api/spotifyApi';
const Lista = ({categoria})=>{
    const [albums,setAlbums] = useState([])
    
useEffect(()=>{
    if(typeof(categoria)==="string"){
        searchByCategory(categoria)
        .then(res=>setAlbums(res))
    }else if(typeof(categoria) === "object"){
        setAlbums(categoria)
    }
},[])
    return albums.length>0?
    <div className={lista}>
        {typeof(categoria)=="string"?<div className={title}>{categoria}</div>:<div></div>}
        <div className={card_container}>
            {albums.map((elem,index)=>{
                return<Card brano={elem} key={index}/>
            })}
            </div> 
    </div>: 
    <div></div>
}

export default Lista