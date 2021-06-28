import React, { useEffect, useState } from 'react'
import { getUserPlaylist,getPlaylistById } from '../../../../api/spotifyApi'

import Lista from '../../Home_page/Show/Lista_brani/Lista_brani'
const Album = ()=>{
        const [albums,setAlbums] = useState([])
    useEffect(()=>{
        let array = []
     getUserPlaylist()
     .then(res=>getPlaylistById(res[0].id)
                            .then(res=>res.map(elem=>{
                                array.push(elem.track.album)
                            }))
                            .then(()=>{setAlbums(array)}))
                            
    },[])
    return <div>
        {albums.length>0?<Lista categoria={albums}></Lista>:<div>Error</div>}
    </div>
}
export default Album