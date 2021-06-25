import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import {playlist_container} from './Playlist.module.css'
import { getUserPlaylist } from '../../../../api/spotifyApi'
const Playlist = ()=>{
    const [playlist,setPlaylist] = useState([])

    useEffect(()=>{
        getUserPlaylist().then(res=>setPlaylist(res))
    },[])
    
    return <div className={playlist_container}>
        {playlist.map((elem,index)=>{
            return <Card playlist={elem} key={index}/>
        })}
    </div>
}

export default Playlist