import api from '../Api';
import {urlApi} from '../ApiConfig';

export default recipeWS = {
    create: async function (title, description, images, video, dishes, time, owner, tags, steps, ingredients, nutritionalInfo ) {
        // Construye la URL para modificar un usuario utilizando la función definida en urlApi
        const URL = urlApi.recipes.create();

        // Construye el objeto que representará el cuerpo de la solicitud
        const requestBody = {
            title: title, 
            description: description, 
            images: images, 
            video: video, 
            dishes: dishes, 
            time: time, 
            owner: owner, 
            tags: tags, 
            steps: steps, 
            ingredients: ingredients, 
            nutritionalInfo: nutritionalInfo,
        }
        // Realiza una solicitud PUT al servidor con la URL y el cuerpo de la solicitud
        return await api.post(URL, requestBody);   
    },
    getRecipes: async function (filtros) {
        const URL = urlApi.recipes.getRecipes;
        console.log(URL+filtros)
        return await api.get(URL+filtros);
        
    }, 
    
    getRecipeInd: async function (_id) {
        const URL = urlApi.recipes.getRecipeInd(_id);
        return await api.get(URL);
    },

    modifyRecipe: async function(_id, title, description, images, video, dishes, time, owner, tags, steps, ingredients, nutritionalInfo) {
        const URL = urlApi.recipes.modifyRecipe(_id);
        const requestBody = {
            title: title, 
            description: description, 
            images: images, 
            video: video, 
            dishes: dishes, 
            time: time, 
            owner: owner, 
            tags: tags, 
            steps: steps, 
            ingredients: ingredients, 
            nutritionalInfo: nutritionalInfo,
        }
        return await api.put(URL, requestBody); 
    },
    
    deleteRecipe: async function (_id) {
        const URL = urlApi.recipes.delete(_id);
        return await api.delete(URL);
    },

    patchRating: async function (userId, _id) {
        const URL = urlApi.recipes.patchFavs(_id);
        const requestBody = {
            rate: rate,
        };
        return await api.patch(URL, requestBody);
    },
}; 




