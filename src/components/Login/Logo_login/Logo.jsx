import React from 'react'
import {logo_container,image_logo} from './Logo.module.css'
import logo_src from '../../../spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png'
const Logo = ()=>{

    return <div className={logo_container}>
                <img className={image_logo} src={logo_src} alt="" />
    </div>
}
export default Logo