import api from '../Api';
import {urlApi} from '../ApiConfig';

export default recipeWS = {

    create: async function (recipeData) {
        const URL = urlApi.recipes.create;
        return await api.post(URL, recipeData);   
    },

    getRecipes: async function (filtros) {
        const URL = urlApi.recipes.getRecipes;
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




