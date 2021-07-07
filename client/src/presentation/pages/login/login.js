import React from "react";
import "./login.css"

export class Login extends React.Component{

    render() {
        return(
            <div className="Container_login">
                <div className="Form_login_container">
                    <h2>Bienvenido a SUYO</h2>
                    <div className="input_container">
                        <label>Nombre de usuario</label>
                        <input type="text" required/>
                    </div>
                    <div className="input_container">
                        <label>Contraseña</label>
                        <input type="password" required/>
                    </div>
                    <button className="Login_button">Iniciar sesion</button>
                </div>
            </div>
        )
    }
}