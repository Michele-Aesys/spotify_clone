import React from 'react'
import Lista from './Lista_brani/Lista_brani'
const Show =({lista})=>{

    return lista.length>0?<div>
        {lista.map((elem,index)=>{
            return <Lista categoria={elem.name} key={index}/>
        })}
        </div>:
    <div></div>
}
export default Show