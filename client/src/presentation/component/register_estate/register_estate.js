import React from "react";
import "./register_estate.css"
import ReactMapGL from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import {Estate_model} from "../../services/model/estate_model";
import {Estate_service} from "../../services/estate_service";

export class Register_estate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            longitude: -75.5816969,
            latitude: 6.1912136,
            zoom: 4,
            width: "95%",
            height: "100%",
            identification: "",
            name: "",
            address: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return(
            <div className="Container_register_estate">
                <form onSubmit={(event) => this.handleSubmit(event)} className="form_register_container">
                    <h1>Registro de predios</h1>
                    <div className="input_section">
                        <div className="input_container">
                            <label className="label_input">Identificacion propietario</label>
                            <input type="text"
                                   onChange={this.handleChange}
                                   name="identification"
                            />
                        </div>
                        <div className="input_container">
                            <label className="label_input">Nombre propietario</label>
                            <input type="text"
                                   onChange={this.handleChange}
                                   name="name"
                            />
                        </div>
                        <div className="input_container">
                            <label className="label_input">Direccion predio</label>
                            <input type="text"
                                   onChange={this.handleChange}
                                   name="address"
                            />
                        </div>
                    </div>
                    <label>*Por favor, ubique la posicion de suprebio en el centro del mapa</label>
                    <div className="map_section">
                        <ReactMapGL className="map"
                                    {...this.state}
                                    mapboxApiAccessToken={"pk.eyJ1IjoidGlwb3giLCJhIjoiY2txcHJrbWd5MWE2YzJzcHFueXR2dmM5YiJ9.C5egBDmcdTNtu8VWJhoi1A"}
                                    onViewportChange={newViewport => {this.setState({...newViewport})}}
                                    mapStyle={"mapbox://styles/tipox/ckqqne69a0e2f17pf6jgzi30a"}
                        >
                            <i className="fas fa-map-pin"/>
                        </ReactMapGL>
                    </div>
                    <button type="submit">Registrar</button>
                    <button type="reset">Limpiar</button>
                </form>
            </div>
        )
    }

    handleSubmit(event){
        const service = new Estate_service()
        const estate = new Estate_model()

        estate.identification = this.state.identification
        estate.name = this.state.name
        estate.address = this.state.address
        estate.latitude = this.state.latitude
        estate.longitude = this.state.longitude

        service.registerEstate(estate)
        console.log(estate)

        event.preventDefault()
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]:value})
        event.preventDefault()
    }
}