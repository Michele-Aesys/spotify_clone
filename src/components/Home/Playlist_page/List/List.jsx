import React from 'react'
import {list_container} from './List.module.css'
import Headers from './Headers/Headers'
import List_item from './List_item/List_item'

const List = ({tracks})=>{

  return <div className={list_container}>
        <Headers></Headers>
        {tracks.map((elem,index)=>{
          return <List_item key={index} numElem={index+1} track={elem} />
        })}
  </div>
}

export default List