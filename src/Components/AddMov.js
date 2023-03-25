import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addMovie} from '../Redux/MovieSlice'

function AddMov() {

    const dispatch = useDispatch();

    const [newMovie,setNewMovie] = useState({title : "", descreption : "" , urlImg : "" , rating : null});

    const handleChange=(e)=>{
        e.preventDefault();
        setNewMovie({...newMovie, [e.target.name] : e.target.value})
    }

    const handleSubmit=(e)=>{
        dispatch(addMovie({newMovie}))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Movie Title</label><br/>
            <input placeholder='Title' name='title' onChange={handleChange}></input> <br/>
            <label>Movie Description</label><br/>
            <input placeholder='Description' name='descreption' onChange={handleChange}></input> <br/>
            <label>Url Img</label><br/>
            <input placeholder=' Image Url' name='urlImg' onChange={handleChange}></input> <br/>
            <label>Rating</label><br/>
            <input placeholder='Rate here' name='rating' onChange={handleChange}></input> <br/>
            <br/>
            <br/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddMov