import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './profile.css'
import { getUserPosts } from '../Redux/PostSlice'


function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {auth} = useSelector((state) => state);
  const { userLoggedIn } = useSelector((state) => state.auth);

  const handleClick=(e)=>{
     navigate('/profile')
  }
  const { allPosts } = useSelector((state) => state.posts);


  return (
    <div >

    {userLoggedIn ? (<section className="vh-1000">
  <div>
    <div >
      <div >

        <div className="cardsheet" style={{border : "4px solid black" , borderRadius: "250px"}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src={auth?.userLoggedIn?.found?.urlImg}
                className="rounded-circle img-fluid" style={{width: "100px"}} />
            </div>
            <h4 className="mb-2">{auth?.userLoggedIn?.found?.firstName} {auth?.userLoggedIn?.found?.lastName}
         </h4>
            <p>Email : {auth?.userLoggedIn?.found?.email}</p>
            <button type="button" className="btn btn-primary btn-rounded btn-lg" onClick={handleClick}>
              Edit
            </button>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                
                {/* <p style={{color : "black"}}>{allPosts?.length}</p>
                <p style={{color : "black"}}>Number of posts </p> */}
                <br/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>) : null }

    </div>
  )
}

export default Profile