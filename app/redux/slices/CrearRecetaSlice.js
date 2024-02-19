import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import recipeWS from '../../networking/api/endpoints/recipeWS';


export const fetchCreateRecipe = createAsyncThunk(
    'recipe/fetchCreateRecipe',
    async (recipeData, { rejectWithValue }) => {
      try {
        const aux = await recipeWS.create(recipeData);
        eliminarDatosCreacion();
        return aux.data;
        
      } catch (error) {
        return rejectWithValue({
          error: error.response,
        });
      }
    }
  );
  

const recipeReducer = createSlice({
  name: 'recipe',
  initialState: {
    recipe: {
        title: null,
        description: null,
        images: null,
        time: null,
        video: null,
        dishes: null,
        ingredients: null,
        steps: null,
        tags: null,
        nutritionalInfo: {
            calories: null,
            proteins: null,
            fats: null,
        },
    }
  },
  reducers: {
    eliminarDatosCreacion: (state) => {
      state.recipe.title = null;
      state.recipe.description = null;
      state.recipe.images = null;
      state.recipe.time = null;
      state.recipe.video = null;
      state.recipe.dishes = null;
      state.recipe.steps = null;
      state.recipe.tags = null;
      state.recipe.nutritionalInfo.calories = null;
      state.recipe.nutritionalInfo.proteins = null;
      state.recipe.nutritionalInfo.fats = null;

    },
    updateParteUno: (state, action) => {
        console.log('entrooooo parte 1')
        state.user.title = action.payload.title;
        console.log(action.payload.title);

        state.user.images = action.payload.images; 
        console.log(action.payload.images);

        state.user.video = action.payload.video; 
        console.log(action.payload.video);

        state.user.description = action.payload.description; 
        console.log(action.payload.description);
        console.log('saliooooo parte 1');
    },
    updateParteDos: (state, action) => {
        console.log('entrooooo parte 2')
        state.user.ingredients = action.payload.ingredients;
        console.log(action.payload.ingredients);

        state.user.steps = action.payload.steps; 
        console.log(action.payload.steps);
        console.log('saliooooo parte 2');
    },
    updateParteTres: (state, action) => {
        console.log('entrooooo parte 3')
        state.user.tags = action.payload.tags;
        console.log(action.payload.tags);

        state.user.time = action.payload.time; 
        console.log(action.payload.time);

        state.user.dishes = action.payload.dishes; 
        console.log(action.payload.dishes);

        state.user.nutritionalInfo.calories = action.payload.nutritionalInfo.calories; 
        console.log(action.payload.nutritionalInfo.calories);

        state.user.nutritionalInfo.proteins = action.payload.nutritionalInfo.proteins; 
        console.log(action.payload.nutritionalInfo.proteins);

        state.user.nutritionalInfo.fats = action.payload.nutritionalInfo.fats; 
        console.log(action.payload.nutritionalInfo.fats);

        console.log('saliooooo parte 3');
    },
  },
  
});

export const { eliminarDatosCreacion, updateParteUno, updateParteDos, updateParteTres } = recipeReducer.actions;

export default recipeReducer.reducer;
