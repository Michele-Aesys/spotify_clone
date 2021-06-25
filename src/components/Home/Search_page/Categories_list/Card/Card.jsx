import React from 'react'
import {card_container,category_name} from './Card.module.css'
const Card = ({category,color})=>{
    return <div className={card_container} style={{backgroundColor:`rgb(${color.red},${color.green},${color.blue})`}}>
                <div className={category_name}>{category.name}</div>
                <img src={category.icons[0].url}></img>
    </div>
}
export default Card