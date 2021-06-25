import React from 'react'
import { Link } from 'react-router-dom'
import {navbar_container,button_arrow,button_user,dynamic,dynamic_container,input_search,dynamic_button} from './Navbar.module.css'
const Navbar = ({search,library})=>{

    
    return <div className={navbar_container}>

                <button className={button_arrow}>{"<"}</button>
                <button className={button_arrow}>{">"}</button>
                <div className={dynamic}>
                    {search?
                    <div className={dynamic_container}>
                        <input type="text" placeholder="Artisti,brani o podcast" className={input_search} />
                    </div>
                    :
                    library?
                    <div className={dynamic_container}>
                        <Link to="/library/playlist"><button className={dynamic_button} autoFocus>Playlist</button></Link>
                        <Link to="/library/podcast"> <button className={dynamic_button}>Podcast</button></Link>
                        <Link to="/library/artist"> <button className={dynamic_button}>Artisti</button></Link>
                        <Link to="/library/album"> <button className={dynamic_button}>Album</button></Link>
                    </div>
                    :
                    <div></div>}
                    </div>
                <div className={button_user}><button>User</button></div>
    </div>
}

export default Navbar