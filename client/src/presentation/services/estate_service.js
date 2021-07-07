import {Estate_model} from "./model/estate_model";

export class Estate_service{

    registerEstate(Estate: Estate_model){
        return fetch('/api/estate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Estate)
        }).then(value => {return value.json()})
    }

    async loadEstates(){
        return await fetch('/api/estate')
            .then(res => res.json()).then(data => (data))
    }

}