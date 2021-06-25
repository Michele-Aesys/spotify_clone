import React from 'react'
import Logo from './Logo_login/Logo'
import Buttons from './Button_login/Button_login'
import Form_login from './Form_login/Form_login'

import {login_page,register_container} from './Login.module.css'
const Login_page = () => {

    if(window.location.hash && !localStorage.getItem("token")){
        console.log(window.location.hash)
        // BQAPYixRzK0XJOmyYZXmC92qF4CCKSAYXIEvSCvFDBSbB1YMjQvQ9cv00f6fNCs1ubid9B7TbM1eoOHM1bBlV1UTIsqzsp1EeGHASMjQklrpo7Y2-j3PTx5qgNKcGeD87wnNN7_QKGU9sKZTed4pjx5AnxOHLMwFDKjvUpk-f0KBFDKUXx_VngvIPc3YCCDmDkr1anqGDP4eHA&
        document.body.style.backgroundColor = "white"
        sessionStorage.setItem("token",window.location.hash.split("&")[0].split("=")[1])
        window.location.href = "http://localhost:3000/"
      }
      
    return(
            <div className={login_page}>
                <Logo />
                <Buttons/>
                <Form_login/>
                <div className={register_container}>
                    Non hai un account?
                    <button>ISCRIVITI A SPOTIFY</button>
                    </div>                
           </div>
    )
}
export default Login_page