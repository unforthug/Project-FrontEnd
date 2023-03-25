import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Post'
import Profile from '../Components/Profile'
import './news.css'
import { getAllPosts } from '../Redux/PostSlice'
import Container from '../Components/Container'
import img from './img/Posts.jpg'

function News() {

  const [open,setOpen] = useState(false)
  const dispatch = useDispatch();


  const handleChange=(e)=>{
   setOpen(open?false:true)
  }
  const { allPosts } = useSelector((state) => state.posts);



  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const {auth} = useSelector((state) => state);
  const { userLoggedIn} = useSelector((state) => state.auth);


  return (
    <div className='post_container'>
        <img className='head' src={img} style={{width : "100%" , height : '250px'}}/>
      <div className='prof'>
        <div><Profile/></div>
      </div>
      <div className='post'>
        
      {userLoggedIn && <button className="btn btn-primary btn-rounded btn-lg" onClick={handleChange}>Add</button>}
      {open?<Post open={setOpen}/>:null}
        <div className='postsCont'>
          {allPosts?.map((el)=>{ return <Container title={el.title} post={el.post} id={el._id}/> })}
        </div>
      </div>
    </div>
  )
}

export default News