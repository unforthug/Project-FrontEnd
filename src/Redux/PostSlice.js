import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const post = createAsyncThunk("/newPost", async({value ,toast },{rejectWithValue,getState,dispatch})=>{
  const userAuth = getState()?.auth?.userLoggedIn?.token;
  const config={headers : {authorization : `Bearer ${userAuth}`}}
    try {
       const {newPost} = await axios.post('https://yourdaily.onrender.com/news/',value , config) 
       toast.success("Posted Successfully")
       return newPost ; 
    } catch (error) {
       return rejectWithValue(error.response.data)
    }

})

export const RePost = createAsyncThunk('share/post', async({title,post,id}, {rejectWithValue,getState})=>{
  const userAuth = getState()?.auth?.userLoggedIn?.token;
  const config={headers : {authorization : `Bearer ${userAuth}`}}
  console.log(title)
  try {
    const {shared} = await axios.post('https://yourdaily.onrender.com/profile/share',{title,post,id},config) 
    return shared ; 
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const getAllPosts = createAsyncThunk(
    "getAllPosts",
    async (payload, { rejectWithValue, getState, dispatch }) => {
  
      try {
        const { data } = await axios.get("https://yourdaily.onrender.com/news/");
        return data;
      } catch (error) {
        return rejectWithValue(error?.response?.message);
      }
    }
  )

  export const getUserPosts = createAsyncThunk("postById", async(payload,{rejectWithValue,getState})=>{
    const userAuth = getState()?.auth?.userLoggedIn?.token;
    const config={headers : {authorization : `Bearer ${userAuth}`}}
    try {
      const {data} = await axios.get("https://yourdaily.onrender.com/news/profile/posts" ,config)

      return data ; 
    } catch (error) {
      return rejectWithValue(error?.response?.message);
    }
  })


const PostSlice = createSlice({
    name : "newPost",
    initialState : {},
    extraReducers : {
        [post.pending]:(state,action)=>{
        state.loading = true ; 
        state.appErr = undefined;
        state.serErr = undefined;
        },
        [post.fulfilled]:(state,action)=>{
            state.loading = action?.payload ; 
            state.appErr = undefined;
            state.serErr = undefined;
        },
        [post.rejected]:(state,action)=>{
            state.loading = false ; 
            state.appErr = action?.payload?.message;
            state.serErr = action?.error?.message;
        },

        [getAllPosts.pending]:(state,action)=>{
            state.loading = true ; 
            state.appErr = undefined;
            state.serErr = undefined;
            },
            [getAllPosts.fulfilled]:(state,action)=>{
                state.loading = false; 
                state.allPosts = action?.payload;
                state.appErr = undefined;
                state.serErr = undefined;
            },
            [getAllPosts.rejected]:(state,action)=>{
                state.loading = false ; 
                state.appErr = action?.payload?.message;
                state.serErr = action?.error?.message;
            },
            [getUserPosts.pending]:(state,action)=>{
              state.loading = true ; 
              state.appErr = undefined;
              state.serErr = undefined;
              },
              [getUserPosts.fulfilled]:(state,action)=>{
                  state.loading = false; 
                  state.allPosts = action?.payload;
                  state.appErr = undefined;
                  state.serErr = undefined;
              },
              [getUserPosts.rejected]:(state,action)=>{
                  state.loading = false ; 
                  state.appErr = action?.payload?.message;
                  state.serErr = action?.error?.message;
              },

              [RePost.pending]:(state,action)=>{
                state.loading = true ; 
                state.appErr = undefined;
                state.serErr = undefined;
                },
                [RePost.fulfilled]:(state,action)=>{
                    state.loading = false; 
                    state.allPosts = action?.payload;
                    state.appErr = undefined;
                    state.serErr = undefined;
                },
                [RePost.rejected]:(state,action)=>{
                    state.loading = false ; 
                    state.appErr = action?.payload?.message;
                    state.serErr = action?.error?.message;
                },

    }
})

export default PostSlice.reducer; 