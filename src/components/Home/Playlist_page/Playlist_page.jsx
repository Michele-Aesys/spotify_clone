import React, { useEffect,useState } from 'react'
import Title from './Title/Title'
import List from './List/List'
import { getPlaylistById } from '../../../api/spotifyApi'
import { useParams } from 'react-router-dom'
const Playlist_page = ()=>{
      const {id} = useParams()
      const [playlist,setPlaylist] = useState("")
      useEffect(()=>{
          getPlaylistById(id)
          .then(res=>setPlaylist(res))

      },[])
      console.log(playlist)
      return <div>
        {playlist!=""?
        <Title name={playlist.name} type={playlist.type}
                img_url={playlist.images[0].url} user={playlist.owner.display_name}
                brani={playlist.tracks.total}
                />

        :
        <div></div>
        }
        </div>

}

export default Playlist_page