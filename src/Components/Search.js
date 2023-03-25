import React from 'react'
import AddMov from './AddMov'
import "./search.css"
import { useDispatch, useSelector } from 'react-redux';
import {SearchMovieByName} from '../Redux/MovieSlice'


function Search() {
  const dispatch = useDispatch();

  const { userLoggedIn} = useSelector((state) => state.auth);

  console.log(userLoggedIn.found.Role)

  const handleChange=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    dispatch(SearchMovieByName(e.target.value))
  }
  return (
    <div className='cntSearch'>
     <div className='ser-container'>
     <h3 style={{fontFamily : "Times New Roman", fontSize : "3rem"}}>Search</h3>
      <div>
      <label style={{fontFamily : "Lucida Handwriting"}}>By name : </label>
      <br/>
      <input placeholder='Enter name here' onChange={handleChange}></input>
      <br/>
      <label style={{fontFamily : "Lucida Handwriting"}}>By rating : </label>
      <br/>
      <input placeholder='Enter Rating'></input>
      </div>
     </div>
     {userLoggedIn?.found?.Role === "admin" ?
          <div className='ads'>
          <AddMov/>
         </div> : null
         }
    </div>
  )
}

export default Search