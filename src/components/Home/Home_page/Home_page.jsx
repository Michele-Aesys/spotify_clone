import React, { useEffect, useState } from 'react'
import Show from './Show/Show'
import Playlist from './Playlist/Playlist'
import {home_container,text} from './Home_page.module.css'
import { getAllNewReleases,getCategories,searchByCategory} from '../../../api/spotifyApi'
const Home_page = ()=>{
    const [lista,setLista] = useState([])
    const [ora,setOra] = useState("")

    const saluto = ()=>{
        let date = new Date()
        let text = ''
        let current_hour = date.getHours()
        if(current_hour<12){
            text="Buongiorno"
        }else if(current_hour>=12 && current_hour<=18){
            text="Buon pomeriggio"
        }else{
            text="Buona sera"
        }
        return text
    }
    useEffect(()=>{
           getCategories()
           .then(res=>setLista(res))
        setOra(saluto())
    },[])
    return <div className={home_container}>
                 <div className={text}>{ora}</div>
                 <Playlist/>
                 <Show lista={lista}/>
      </div>
}

export default Home_page