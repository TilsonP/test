import React from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./consult_estate.css"
import {Estate_service} from "../../services/estate_service";

export class Consult_estate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            longitude: -75.5816969,
            latitude: 6.1912136,
            zoom: 4,
            width: "100%",
            height: "100%",
            estates: [],
            items: []
        }
        this.handledLoadEstates = this.handledLoadEstates.bind(this)
    }

    render() {

        const estates = this.state.estates

        console.log(estates)

        return (
            <div className="container_consult_estate">
                <div className="container_map">
                    <ReactMapGL className="map"
                                {...this.state}
                                mapboxApiAccessToken={"pk.eyJ1IjoidGlwb3giLCJhIjoiY2txcHJrbWd5MWE2YzJzcHFueXR2dmM5YiJ9.C5egBDmcdTNtu8VWJhoi1A"}
                                onViewportChange={newViewport => {this.setState({...newViewport})}}
                                mapStyle={"mapbox://styles/tipox/ckqqne69a0e2f17pf6jgzi30a"}
                    >
                        {this.state.items}
                    </ReactMapGL>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.handledLoadEstates().then()
    }

    async handledLoadEstates(){
        const service = new Estate_service()

        const estates = Object.values(await service.loadEstates())

        this.setState({["estates"]:estates})

        console.log(estates.length)

        estates.forEach(estate => {
            this.state.items.push(
                <Marker longitude={estate.longitude} latitude={estate.latitude}>
                    <i className="fas fa-house-user"/>
                </Marker>
            )
        })
    }

}