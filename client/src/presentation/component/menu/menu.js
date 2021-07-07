import React from "react";
import "./menu.css"
import {Link} from 'react-router-dom';

export class Menu extends React.Component{

    render() {
        return (
                <nav className="menu">
                    <div className="logo_container">
                        <i className="fas fa-map-marker-alt"/>
                        <div className="name_container">
                            <a className="name">SUYO</a>
                        </div>
                    </div>
                    <div className="menu_container">
                        <ul>
                            <Link to={'/route_register_estate'}>
                            <li className="menu_element">
                                <i className="fas fa-house-user"/>
                                <a>Registrar predio</a>
                            </li>
                            </Link>
                            <Link to={'/route_consult_estate'}>
                            <li className="menu_element">
                                <i className="fas fa-map-marked-alt"/>
                                <a>Visualizar predios</a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
        );
    }

}