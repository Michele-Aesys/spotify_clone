import React from 'react'
import { Link } from 'react-router-dom'
import { sidebar_container, logo_container, logo, button, playlist_favorite, img, text,border,link_container} from './Sidebar.module.css'
import logo_src from '../../../spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png'
const Sidebar = ({dispatch}) => {

    return <div className={sidebar_container}>

            <div className={logo_container}><img className={logo} src={logo_src} alt="" /></div>
 
            <Link to="/"><button className={button} onClick={()=>{dispatch({type:"home"})}} autoFocus>Home</button></Link>
            <Link to="/search"><button className={button} onClick={()=>{dispatch({type:"search"})}}>Cerca</button></Link>
            <Link to="/library/playlist"><button className={button} onClick={()=>{dispatch({type:"library"})}}>La tua libreria</button></Link>
 
            <div className={playlist_favorite}>
                <div className={img}>+</div>
                <div className={text}>Crea playlist</div>
            </div>
            <div className={playlist_favorite}>
                <div className={img}>-</div>
                <div className={text}>Brani preferiti</div>
            </div>
            <div className={border}></div>
        </div>
}
export default Sidebar