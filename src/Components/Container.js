import React, {  useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import './container.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {RePost} from '../Redux/PostSlice'




function Container({title,post,id}) {
  
  const dispatch = useDispatch(); 
  const [showMore, setShowMore] = useState(false)
  const { userLoggedIn} = useSelector((state) => state.auth);
  const [open,setOpen] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setOpen(!open)
    setShow(true)};


  const handleClick =({id})=>{
    setShowMore(!showMore)
   }

   const handleShare=(e)=>{
    dispatch(RePost({title , post , id})) ; 
    handleClose() ; 

   }
  return (
   
    <div className='cnt'>
    <h2 className='postTitle'>{title}</h2>
    <br/>
    {/* <p className='postss'>{post}</p> */}
  {showMore ? post : `${post}`}
  <button className="btn" onClick={handleClick}>Show more</button>
  {userLoggedIn && <div><button className="btn btn-primary btn-rounded btn-lg" onClick={handleShow}>Share</button></div>}
  {open &&
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{post}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShare}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
  }
    </div>
    
  )
}

export default Container