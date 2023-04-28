import React, { useState, useRef } from 'react';
import Carousel from "react-material-ui-carousel";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

import { Button } from "@mui/base";

const useStyles = makeStyles({
  activeSlide: {
    border: '2px solid red',
  },
});

const items=[
    {
      image_url:'https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971__340.jpg',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image_url:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuE3Jlw12KeM0KtLvAUkTwvhB_kpTz81b7-9M-x5Hb&s',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1200px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBvYLzJXg6OKR7zgOdXQB4S5tLLxAZevCeg&usqp=CAU',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIpAt8211_DCp5rMAVhu-RQIe9gTu_r9piw&usqp=CAU',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];

const MyCarousel = () => {
  const classes = useStyles();
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState({});
  const [autoPlayStart,setautoPlayStart]=useState(false);

  const handleNextClick = () => {
    carouselRef.current.next();
    setCurrentSlide(items[items.indexOf(currentSlide)+1]);
  };

  const handlePrevClick = () => {
    carouselRef.current.prev();
    setCurrentSlide(items[items.indexOf(currentSlide)-1]);
  };

  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < items.length-2; i += 1) {
      const slide = (
        <Box key={i} display="flex">
          <img
            src={items[i].image_url}
            alt=""
            className={items.indexOf(currentSlide) === i ? classes.activeSlide : ''}
            style={{width:'15%',height:'22vh',borderRadius: '10%',display:"inline-block"}}
          />
          {items[i + 1] && (
            <img
              src={items[i + 1].image_url}
              alt=""
              className={items.indexOf(currentSlide) === i + 1 ? classes.activeSlide : ''}
              style={{width:'15%',height:'22vh',borderRadius: '10%',display:"inline-block"}}
            />
          )}
          {items[i + 2] && (
            <img
              src={items[i + 2].image_url}
              alt=""
              className={items.indexOf(currentSlide) === i + 2 ? classes.activeSlide : ''}
              style={{width:'15%',height:'22vh',borderRadius: '10%',display:"inline-block"}}
            />
          )}
        </Box>
      );

      slides.push(slide);
    }

    return slides;
  };

  return (
    <div>
        
         <div className="image-elaborate">
        <img src={currentSlide.image_url} style={{width:'40%',height:'50vh',borderRadius: '10%'}} />
        <div className="image-text">
            <Typography>{currentSlide.description}</Typography>
        </div>
        </div>
      <Carousel
        ref={carouselRef}
        navButtonsProps={{
          style: {
            display: 'none',
          },
        }}
        animation="slide"
        cycleNavigation={true}
        timeout={3000}
        slidesPerView={4}
        autoPlay={autoPlayStart}
        // onBeforeChange={(from, to) => {
        //   // determine the direction of navigation
        //   const isGoingForward = to > from;
        //   const isGoingBackward = to < from;

        //   // shift the array of items to mimic the cyclic behavior
        //   if (isGoingForward) {
        //     items.push(items.shift());
        //   } else if (isGoingBackward) {
        //     items.unshift(items.pop());
        //   }

        //   // update the current slide index
        //   setCurrentSlide(to % items.length);
        // }}
      >
        {renderSlides()}
      </Carousel>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <Button onClick={()=>setautoPlayStart(!autoPlayStart)}>autoplay</Button>
    </div>
   
  );
};

export default MyCarousel;
