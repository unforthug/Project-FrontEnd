import React, { useEffect } from 'react'
import './movies.css'
import MovieCard from "../Components/MovieCard"
import Search from '../Components/Search'
import { getAllMovies } from '../Redux/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'



function Movies() {

  const dispatch = useDispatch();

  const { allMovies } = useSelector((state) => state.movies);

  const { userLoggedIn} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  

  return (
    <div className='container'>
      {userLoggedIn && <Search/>}
      <div className='mov-container'>
      {allMovies?.map((el)=>{ return <MovieCard urlImg={el.urlImg} title={el.title} descreption={el.descreption} rating={el.rating}/> })}
      </div>
    </div>
  )
}

export default Movies