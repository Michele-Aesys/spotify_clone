import React from 'react'
import {buttons_container,button_facebook,button_apple,button_google,division_container,division} from './Button_login.module.css'
const Buttons = ()=>{

    return <div className={buttons_container}>
                Per continuare, accedi a spotify
                <button className={button_facebook}>CONTINUA CON FACEBOOK</button>
                <button className={button_apple}>CONTINUA CON APPLE</button>
                <button className={button_google}>CONTINUA CON GOOGLE</button>
                <div className={division_container}>
                    <div className={division}></div>
                    <div>o</div>
                    <div className={division}></div>
                </div>
            </div>
}
export default Buttons