import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



export const addMovie = createAsyncThunk("add/movie", async({newMovie},{rejectWithValue,getState})=>{
    try {
       const {data} = await axios.post('https://yourdaily.onrender.com/movies/',newMovie) 
       return data ; 
    } catch (error) {
       return rejectWithValue(error?.response?.data)
    }

})

export const getAllMovies = createAsyncThunk(
    "getAllMovies",
    async (payload, { rejectWithValue, getState, dispatch }) => {
  
      try {
        const { data } = await axios.get("https://yourdaily.onrender.com/Movies/");
        console.log("done")
        return data;
      } catch (error) {
        return rejectWithValue(error?.response?.message);
      }
    }
  )


const MovieSlice = createSlice({
    name : "newMovie",
    initialState : {},
    extraReducers : {
        [addMovie.pending]:(state,action)=>{
        state.loading = true ; 
        state.appErr = undefined;
        state.serErr = undefined;
        },
        [addMovie.fulfilled]:(state,action)=>{
            state.loading = action?.payload ; 
            window.location.reload();
            state.appErr = undefined;
            state.serErr = undefined;
        },
        [addMovie.rejected]:(state,action)=>{
            state.loading = false ; 
            state.appErr = action?.payload?.message;
            state.serErr = action?.error?.message;
        },

        [getAllMovies.pending]:(state,action)=>{
            state.loading = true ; 
            state.appErr = undefined;
            state.serErr = undefined;
            },
            [getAllMovies.fulfilled]:(state,action)=>{
                state.loading = false; 
                state.allMovies = action?.payload;
                state.appErr = undefined;
                state.serErr = undefined;
            },
            [getAllMovies.rejected]:(state,action)=>{
                state.loading = false ; 
                state.appErr = action?.payload?.message;
                state.serErr = action?.error?.message;
            },

    }
})

export const {SearchMovieByName} = MovieSlice.actions
export default MovieSlice.reducer; 