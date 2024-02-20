import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import recipeWS from '../../networking/api/endpoints/recipeWS';


export const fetchCreateRecipe = createAsyncThunk(
    'recipe/fetchCreateRecipe',
    async (recipeData, { rejectWithValue }) => {
      try {
        console.log("AUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

        console.log("El json que mandamos es" + recipeData);

        const aux = await recipeWS.create(recipeData);
        console.log("la respuesta es" + aux)
        eliminarDatosCreacion();
        console.log("AUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3")
        
        return aux;
        
      } catch (error) {
        console.log("el error es" + error);
        console.log("el error response es" + error.response);
        console.error('AxiosError:', error);
        console.log('Error Response:', error.response.data);
    
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
        owner: {
          googleId: null,
          name: null,
          email: null,
          photo: null,
        }
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
      state.recipe.owner.googleId = null;
      state.recipe.owner.name = null;
      state.recipe.owner.email = null;
      state.recipe.owner.photo = null;

    },
    updateParteUno: (state, action) => {
        console.log('entrooooo parte 1')
        state.recipe.title = action.payload.title;
        console.log(action.payload.title);

        state.recipe.images = action.payload.images; 
        console.log(action.payload.images);

        state.recipe.video = action.payload.video; 
        console.log(action.payload.video);

        state.recipe.description = action.payload.description; 
        console.log(action.payload.description);
        console.log('saliooooo parte 1');
    },
    updateParteDos: (state, action) => {
        console.log('entrooooo parte 2')
        state.recipe.ingredients = action.payload.ingredientes;
        console.log(action.payload.ingredients);
 
        state.recipe.steps = action.payload.pasos; 
        console.log(action.payload.steps);
        console.log('saliooooo parte 2');
    },
    updateParteTres: (state, action) => {
        console.log('entrooooo parte 3')
        state.recipe.tags = action.payload.selectedTags;
        console.log(action.payload.selectedTags);

        state.recipe.time = action.payload.time; 
        console.log(action.payload.time);

        state.recipe.dishes = action.payload.dishes; 
        console.log(action.payload.dishes);

        const aux = {
          calories: action.payload.calories,
          proteins: action.payload.proteins,
          fats: action.payload.fats
        }

        state.recipe.nutritionalInfo = aux;
        console.log('saliooooo parte 3');

        state.recipe.owner = action.payload.owner;
    },
  },
  
});

export const { eliminarDatosCreacion, updateParteUno, updateParteDos, updateParteTres } = recipeReducer.actions;

export default recipeReducer.reducer;
