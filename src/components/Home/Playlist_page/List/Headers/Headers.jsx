import React from 'react'
import {headers_container,title,album,add,duration,num} from './Headers.module.css'

const Headers =()=>{

    return <div className={headers_container}>
        <div className={num}>#</div>
        <div className={title}>TITOLO</div>
        <div className={album}>ALBUM</div>
        <div className={add}>AGGIUNTO IL</div>
        <div className={duration}>DURATION</div>
    </div>
}
export default Headers