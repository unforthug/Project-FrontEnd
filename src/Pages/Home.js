import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import img1 from './img/news.jpg'
import img2 from './img/movie.jpg'
import img3 from './img/bas.jpg'
import {useNavigate} from "react-router-dom"

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const navigate = useNavigate();

    const navigHandlerNews=(e)=>{
      e.preventDefault();
      navigate('/news')
    }
    const navigHandlerMov=(e)=>{
      e.preventDefault();
      navigate('/movies')
    }

  return (
    <div style={{margin : "100px" , height : "100px"}}>
      <div>
        <h1 style={{fontFamily : "Lucida Handwriting" , color :"white"}}>Welcome To Your Daily Site</h1>
        <p style={{fontFamily : "Lucida Handwriting" , color :"white"}}>This is your space , use it with respect and enjoy adding posts and watching movies</p>
      </div>
     <div>
     <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="img"
        src={img1}
        alt="First slide"
        onClick={navigHandlerNews}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img"
        src={img2}
        alt="Second slide"
        onClick={navigHandlerMov}
       
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img"
        src={img3}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
     </div>
    </div>
  )
}

export default Home