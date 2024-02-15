import api from '../Api';
import {urlApi} from '../ApiConfig';

export default userWS = {
    
modify: async function (userId, name, email, image, favs) {
    // Construye la URL para modificar un usuario utilizando la función definida en urlApi
    const URL = urlApi.users.modify(userId);

    // Construye el objeto que representará el cuerpo de la solicitud
    const requestBody = {
        name: name,
        email: email,
        image: image,
        favs: favs
    };

    // Realiza una solicitud PUT al servidor con la URL y el cuerpo de la solicitud
    return await api.put(URL, requestBody);
},

get: async function (userId) {
    const URL = urlApi.users.get(userId);
    return await api.get(URL);
},

delete: async function (userId) {
    const URL = urlApi.users.delete(userId);
    return await api.delete(URL);
},

patchFavs: async function (userId, recipeId) {
    const URL = urlApi.users.patchFavs(userId);
    const requestBody = {
        recipeId: recipeId,
    };
    return await api.patch(URL, requestBody);
},

getFavs: async function (userId) {
    const URL = urlApi.users.getFavs(userId);
    return await api.get(URL);
},

getMyRec: async function (userId) {
    const URL = urlApi.users.getMyRec(userId);
    return await api.get(URL);
},

}