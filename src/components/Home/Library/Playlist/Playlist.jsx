import React, { useEffect, useState } from 'react'
import Lista from '../../Home_page/Show/Lista_brani/Lista_brani'
import { getUserPlaylist } from '../../../../api/spotifyApi'
const Playlist = ()=>{
    const [albums,setAlbums] = useState([])
    
    useEffect(()=>{
        getUserPlaylist()
        .then(res=>setAlbums(res))
    },[])

    return <div>
       {albums.length>0?<Lista categoria={albums}></Lista>:<div>Error</div>}
        </div>
    // return <div></div>
}
export default Playlist