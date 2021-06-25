import React, { useEffect } from 'react'
import { getUserPlaylist } from '../../../../api/spotifyApi'
const Artist = ()=>{
   useEffect(()=>{
        getUserPlaylist().then(res=>console.log(res))
   },[])
    return <div></div>
}
export default Artist