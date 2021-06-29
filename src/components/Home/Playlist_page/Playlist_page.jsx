import React, { useEffect,useState } from 'react'
import Title from './Title/Title'
import List from './List/List'
import { getPlaylistById,getAlbumById} from '../../../api/spotifyApi'
import { useParams } from 'react-router-dom'
const Playlist_page = ({dispatch})=>{
      const {id} = useParams()
      const [playlist,setPlaylist] = useState("")
      console.log(id)
      useEffect(()=>{
        dispatch({type:"home"})
          getPlaylistById(id)
          .then(res=>setPlaylist(res))
          .catch(()=>getAlbumById(id).then(res=>console.log(res)))

      },[])
      return <div>
        {playlist!=""?
        <div>
        <Title name={playlist.name} type={playlist.type}
                img_url={playlist.images[0].url} user={playlist.owner.display_name}
                brani={playlist.tracks.total}
                />
        <List tracks={playlist.tracks.items}/>
        </div>
        :
        <div></div>
        }
        </div>

}

export default Playlist_page