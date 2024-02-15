import api from '../Api';
import {urlApi} from '../ApiConfig';

export default healthWS = {
    health: async function () {
        const URL = urlApi.health.health;
        try{
            return (await api.get(URL)).data;
        }
        catch(error){
            console.log(error)
        }
        
    },   
}