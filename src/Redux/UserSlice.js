import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk("user/register", async({formValue ,toast , navigate},{rejectWithValue,getState})=>{
     try {
        const {newUser} = await axios.post('https://yourdaily.onrender.com/user/signup',formValue) 
        toast.success("Registred Successfully")
        navigate('/')
        return newUser ; 
     } catch (error) {
        return rejectWithValue(error?.response?.data)
     }

})

export const login = createAsyncThunk('user/login', async({formValue,toast,navigate},{rejectWithValue,getState})=>{
    try {
        const {data} = await axios.post('https://yourdaily.onrender.com/user/signin',formValue)
        localStorage.setItem("userInfos", JSON.stringify(data));
        toast.success("Welcome")
        navigate('/news')
        return data ; 
    } catch (error) {
        rejectWithValue(error?.response?.data)
    }
})

export const logout = createAsyncThunk(
    "user/logout",
    async (navigate, { rejectWithValue }) => {
      try {
        await localStorage.removeItem("userInfos");
        navigate("/login");
      } catch (error) {
        return rejectWithValue(error?.response?.data);
      }
    }
  );

  export const updateUser = createAsyncThunk(
    "user/update",
    async ({editUser, navigate}, { rejectWithValue }) => {
      try {
        const {data} = await axios.put('https://yourdaily.onrender.com/user/profile',editUser)
        await localStorage.removeItem("userInfos");
        navigate("/login");
      } catch (error) {
        return rejectWithValue(error?.response?.data);
      }
    }
  );

const userStored = localStorage.getItem("userInfos") ? JSON.parse(localStorage.getItem("userInfos")) : null;


const userSlice = createSlice({
    name : "user",
    initialState : { userLoggedIn: userStored  },
    extraReducers : {
        [register.pending]:(state,action)=>{
        state.loading = true ; 
        state.appErr = undefined;
        state.serErr = undefined;
        },
        [register.fulfilled]:(state,action)=>{
            state.userRegistred = action?.payload ; 
            window.location.reload();
            state.appErr = undefined;
            state.serErr = undefined;
        },
        [register.rejected]:(state,action)=>{
            state.loading = false ; 
            state.appErr = action?.payload?.message;
            state.serErr = action?.error?.message;
        },

        //////////////////////////////////////////

        [login.pending]:(state,action)=>{
            state.loading = true ; 
            state.appErr = undefined;
            state.serErr = undefined;
            },
            [login.fulfilled]:(state,action)=>{
                state.loading = false ; 
                state.userLogged = action?.payload ; 
                window.location.reload();
                state.appErr = undefined;
                state.serErr = undefined;
            },
            [login.rejected]:(state,action)=>{
                state.loading = false ; 
                state.appErr = action?.payload?.message;
                state.serErr = action?.error?.message;
            },
                ////////////////////////////////////////////////////

            [logout.pending]: (state, action) => {
                state.loading = true;
            },
            [logout.fulfilled]: (state, action) => {
                state.loading = false;
                state.userLogged = null;
                window.location.reload();
                state.appErr = undefined;
                state.serverErr = undefined;
            },
            [logout.rejected]: (state, action) => {
                state.loading = false;
                state.appErr = action?.payload?.message;
                state.serverErr = action?.error?.message;
            },

            [updateUser.pending]: (state, action) => {
                state.loading = true;
            },
            [updateUser.fulfilled]: (state, action) => {
                state.loading = false;
                state.userLogged = null;
                state.appErr = undefined;
                state.serverErr = undefined;
            },
            [updateUser.rejected]: (state, action) => {
                state.loading = false;
                state.appErr = action?.payload?.message;
                state.serverErr = action?.error?.message;
            },
    }
})

export default userSlice.reducer; 
export const { AuthHandler } = userSlice.actions;