import React, { useEffect } from 'react'
import Card from './Card/Card';
import useColor from '../../../../hook/useColor';
import {cat_list} from './Categories_list.module.css'
const Cat_list = ({categories})=>{
    let color = useColor(50)
    return <div className={cat_list}>
        {categories.map((elem,index)=>{
        return <Card category={elem} color={color[index]} key={index}></Card>
    })}
    </div>
}
export default Cat_list