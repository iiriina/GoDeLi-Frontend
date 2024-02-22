export const config = {
    BASE_URL: 'https://godeli-production.up.railway.app/',
    TIME_OUT: 5000,
  };

export const urlApi = {
    health: {
        health: 'health/',
    },
    auth: {
        create: 'auth/',
        update: 'auth/',
        delete: (googleId) => `auth/${googleId}`,
    },
    users: {
        modify: (userId) => `users/${userId}`,
        get: (userId) => `users/${userId}`,
        delete: (userId) => `users/${userId}`,
        patchFavs: (userId) => `users/${userId}/favorites`,
        getFavs: (userId) => `users/${userId}/favorites`,
        getMyRec: (userId) => `users/${userId}/recipes`,
    },
    recipes: {
        create: 'recipes/',
        getRecipes: 'recipes/?',
        getRecipeInd: (recipeId) => `recipes/${recipeId}`,
        modifyRecipe: (recipeId) => `recipes/${recipeId}`,
        deleteRecipe: (recipeId) => `recipes/${recipeId}`,
        patchRating: (recipeId) => `recipes/${recipeId}/rating`,
    }
};