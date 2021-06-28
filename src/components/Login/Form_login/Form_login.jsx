import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import {form_container,form_input, remember_container,submit,checkbox,password_loss,submit_container} from './Form.module.css'
const Form_login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ()=> window.location.href="https://accounts.spotify.com/authorize?client_id=f9f4fca2fc7541fcb2463878bdacf6f9&response_type=token&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

    return (
        <div className={form_container}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={form_input}>
                    Indirizzo e-mail o Username 
                    <div><input placeholder="Indirizzo e-mail o Username" {...register("username", { required: true })} /></div>
                    </div>

                <div className={form_input}>
                    Password 
                    <div><input placeholder="Password" type="password" {...register("password", { required: true })} /></div>
                    </div>

                <div className={password_loss}>Hai dimenticato la password?</div>

                <div className={remember_container}>

                    <div className={checkbox}><input type="checkbox" {...register("remember")} />Ricordami</div>
                    <input className={submit} value="ACCEDI" type="submit" />

                </div>
            </form>

        </div>

    );
}
export default Form_login