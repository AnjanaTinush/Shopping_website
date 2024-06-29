"use client"
import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';


function Hero() {

    var settings ={
         dots : true,
         infinite :true,
         slidesToShow : 1,
         slidesToScroll :1,
         autoplay : true,
         pauseOnHover : false,
    };

   const slideData = [
    {
        id:0,
        img:'/slide1.jpg',
        title:'Gaming',
        mainTitle:'Asus',
        rating:'#####'
    },
    {
        id:1,
        img:'/slide2.jpg',
        title:'Gaming',
        mainTitle:'Msi',
        rating:'####'
    },
    {
        id:2,
        img:'/slide3.JPG',
        title:'Gaming',
        mainTitle:'Lenovo',
        rating:'###'
    },
   ]

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=>( 
                <Slide
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  mainTitle={item.mainTitle}
                  rating={item.rating}
                />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero