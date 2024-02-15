import api from '../Api';
import {urlApi} from '../ApiConfig';

export default authWS = {
    create: async function () {
        const URL = urlApi.auth.create;
        return await api.post(URL);
    },

    update: async function () {
        const URL = urlApi.auth.update;
        return await api.put(URL);

    },

    delete: async function (googleId) {
        const URL = urlApi.auth.delete(googleId);
        return await api.delete(URL);
    },



}