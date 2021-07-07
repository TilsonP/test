import React from "react";
import "./principal_page.css"
import {Login} from "../login/login";
import {Menu} from "../../component/menu/menu";
import {Register_estate} from "../../component/register_estate/register_estate";
import {Consult_estate} from "../../component/consult_estate/consult_estate";
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';

export class Principal_page extends React.Component{

    render() {
        return(
            <div className="Container_principal">
                <BrowserRouter>
                    <Menu/>
                <Redirect
                    from="/"
                    to="/route_consult_estate" />
                <Switch>
                    <Route
                        path="/route_register_estate"
                        render={() => <Register_estate/>}/>
                    <Route
                        path="/route_consult_estate"
                        render={() => <Consult_estate/>}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}