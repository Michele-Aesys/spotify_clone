import React from 'react'
import {title_container,description_container,desc_type,desc_name,desc_user} from './Title.module.css'
const Title = ({name,type,img_url,user,brani})=>{

  return <div className={title_container}>
        <img src={img_url} alt=""></img>
        <div className={description_container}>
          <div className={desc_type}>{type.toUpperCase()}</div>
          <div className={desc_name}>{name}</div>
          <div className={desc_user}>{`${user} - ${brani} Brani`}</div>
        </div>
  </div>
}

export default Title