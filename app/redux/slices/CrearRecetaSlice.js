import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import recipeWS from '../../networking/api/endpoints/recipeWS';


export const fetchCreateRecipe = createAsyncThunk(
    'recipe/fetchCreateRecipe',
    async (recipeData, { rejectWithValue }) => {
      try {
       

        const aux = await recipeWS.create(recipeData);
        eliminarDatosCreacion();
        const aux2 = aux.status;
        
        return aux2;
        
      } catch (error) {
        console.log(error);
    
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

        state.recipe.title = action.payload.title;
        
        state.recipe.images = action.payload.images; 
        
        state.recipe.video = action.payload.video; 
        
        state.recipe.description = action.payload.description; 

    },
    updateParteDos: (state, action) => {

        state.recipe.ingredients = action.payload.ingredientes;
      
 
        state.recipe.steps = action.payload.pasos; 

    },
    updateParteTres: (state, action) => {

        state.recipe.tags = action.payload.selectedTags;

        state.recipe.time = action.payload.time; 

        state.recipe.dishes = action.payload.dishes; 


        const aux = {
          calories: action.payload.calories,
          proteins: action.payload.proteins,
          fats: action.payload.fats
        }

        state.recipe.nutritionalInfo = aux;


        state.recipe.owner = action.payload.owner;

    }
  },
  
});

export const { eliminarDatosCreacion, updateParteUno, updateParteDos, updateParteTres } = recipeReducer.actions;

export default recipeReducer.reducer;
