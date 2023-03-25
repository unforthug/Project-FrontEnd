import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import PostSlice from './PostSlice';
import MovieReducer from './MovieSlice';

const store = configureStore({
    reducer : { auth : userReducer , posts : PostSlice , movies : MovieReducer},
    
})

export default store ; 