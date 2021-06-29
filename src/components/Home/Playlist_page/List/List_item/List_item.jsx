import React from 'react'
import {item_container,item_num,item_title,item_album,item_add,item_duration} from './List_item.module.css'

const List_item = ({track,numElem})=>{
 
    return <div className={item_container}>
            <div className={item_num}>{numElem}</div>
            <div className={item_title}>{track.track.name}</div>
            <div className={item_album}>{track.track.album.name}</div>
            <div className={item_add}>{track.added_at.split("T")[0]}</div>
            <div className={item_duration}>{((track.track.duration_ms/1000)/60).toFixed(2)}</div>
    </div>
}

export default List_item