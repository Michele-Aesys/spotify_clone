import React, { useEffect, useState } from 'react'
import Lista from '../../Home_page/Show/Lista_brani/Lista_brani'
import { getUserPlaylist, getPlaylistById, getArtists} from '../../../../api/spotifyApi'
const Artist = ()=>{
     const [artists,setArtists] = useState([])
   useEffect(()=>{
        let id = []
        let string = ""
        getUserPlaylist()
        .then(res=>getPlaylistById(res[0].id)
                              .then(res=>res.tracks.items.map(elem=>{
                              id.push(elem.track.artists.map((elem,index)=>{ return elem.id}))})
                              ))
                              .then(()=>{
                                   let id_array = []
                                   id.map((elem)=>{
                                   elem.map((id)=>id_array.push(id))
                                   })
                                   id_array.map((elem,index)=>{
                                        if(index===0){
                                             string +=`${elem},`
                                        }else{
                                             let equal =false
                                             id_array.map(e=>{
                                                  if(e===elem){
                                                       equal=true
                                                  }else{
                                                       equal=false
                                                  }
                                             })
                                             if(!equal){
                                                  string +=`${elem},`
                                             }
                                        }
                                   })
                              })
                              .then(()=>{getArtists(string.slice(0,string.length-1)).then(res=>setArtists(res))})
   },[])
    return <div>
         {artists.length>0?<Lista categoria={artists}></Lista>:<div>Error</div>}
    </div>
}
export default Artist