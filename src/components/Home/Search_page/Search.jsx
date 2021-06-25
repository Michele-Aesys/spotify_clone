import React, { useEffect, useState } from 'react'
import Cat_list from './Categories_list/Categories_list'
import Carousel from './Carousel/Carousel'
import { search,all,top} from './Search.module.css'
import { getCategories } from '../../../api/spotifyApi'

const Search = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        getCategories(50).then(res => setCategories(res))
    }, [])

    return <div className={search}>
        <div className={top}>I tuoi generi top</div>
        <Carousel categories={categories.splice(0,4)}/>
        <div className={all}> Sfoglia tutto</div>
        <Cat_list categories={categories}/>
    </div>
}
export default Search