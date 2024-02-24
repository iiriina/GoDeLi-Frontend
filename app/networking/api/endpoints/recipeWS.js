import api from '../Api';
import {urlApi} from '../ApiConfig';

export default recipeWS = {

    create: async function (recipeData) {
        const URL = urlApi.recipes.create;
        return await api.post(URL, recipeData);   
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

    modifyRecipe: async function(recipeId, title, description, images, video, dishes, time, tags, steps, ingredients, calories, fats, proteins) {
        const URL = urlApi.recipes.modifyRecipe(recipeId);
        const requestBody = {
            title: title, 
            description: description, 
            images: images, 
            video: video, 
            dishes: dishes, 
            time: time, 
            tags: tags, 
            steps: steps, 
            ingredients: ingredients, 
            nutritionalInfo: {
                calories: calories,
                fats: fats,
                proteins: proteins
            }
        }
        console.log("El body es:" + requestBody)
        return await api.put(URL, requestBody); 
    },
    
    deleteRecipe: async function (_id) {
        const URL = urlApi.recipes.deleteRecipe(_id);
        return await api.delete(URL);
    },

    patchRating: async function (rating, _id) {
        const URL = urlApi.recipes.patchRating(_id);
        const requestBody = {
            rate: rating,
        };
        return await api.patch(URL, requestBody);
    },
}; 




