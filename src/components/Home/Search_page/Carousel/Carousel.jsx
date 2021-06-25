import React from 'react'
import { carousel_container, carousel, cards,card,name,arrow_left,arrow_right} from './Carousel.module.css'
import useColor from '../../../../hook/useColor';
const Carousel = ({ categories }) => {
    const colors = useColor(4)

    const slide = (ev)=>{
            let id =ev.target.id
            let left="5vh"
            switch (id) {
                case "right":
                    left="-90vh"
                    document.getElementById(id).style.visibility="hidden"
                    document.getElementById("left").style.visibility="visible"
                    break;
                case "left":
                    document.getElementById(id).style.visibility="hidden"
                    document.getElementById("right").style.visibility="visible"
                    break;
                default:
                    break;
            }
            document.getElementById("carousel").style.left=left
    }

    return <div className={carousel_container}>
         <button className={arrow_left} id="left" onClick={slide}>{"<"}</button>
        <div className={carousel} id="carousel">
            <div className={cards}>
                    {categories.map((elem,index)=>{
                        return <div className={card} key={index} style={{backgroundColor:`rgb(${colors[index].red},${colors[index].green},${colors[index].blue})`}}>
                                <div className={name}>{elem.name}</div>
                                <img src={elem.icons[0].url}></img>
                        </div>
                    })}
            </div>
        </div>
        <button className={arrow_right} id="right" onClick={slide}>{">"}</button>
    </div>
}

export default Carousel