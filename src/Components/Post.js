import React, { useState } from 'react'
import './post.css'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { post } from '../Redux/PostSlice';
import {toast} from "react-toastify"


function Post({open}) {

  const [value,setValue] = useState({title : '',post : ''})


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange=(e)=>{
   setValue({...value,[e.target.name]:e.target.value})
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(post({value , toast}))
    navigate('/news/')
    open(false) ; 
  }

  return (
    <div className='pstContainer'>
      <form>
    <div className='pst'>
      <h3><input name='title' placeholder='Title' onChange={handleChange}/></h3>
      <p><input name='post' placeholder='Enter your text here : post and get comments' onChange={handleChange}/></p>
    </div>
    <br/>
    <button type='submit' className="btn btn-primary btn-rounded btn-lg" onClick={handleSubmit}>Save</button>
    </form>
    </div>
    

  )
}

export default Post