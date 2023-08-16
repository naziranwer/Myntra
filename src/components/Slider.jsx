import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "200px",
// };

const slideImages = [
  {
    url: "../../images/slide1.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide2.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide3.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide4.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide5.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide6.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide7.png",
    caption: "Slide 1",
  },
  {
    url: "../../images/slide8.png",
    caption: "Slide 1",
  },
];

const SlidingImage = () => {
  const slideProperties = {
    duration: 3000, // Time in milliseconds for each slide
    transitionDuration: 500, // Time in milliseconds for slide transition
    infinite: true, // Allow infinite looping
    indicators: true, // Display slide indicators
    pauseOnHover: true, // Pause autoplay on hover
    onChange: (oldIndex, newIndex) => {
      // Callback function when the slide changes
      console.log(`Slide changed from ${oldIndex} to ${newIndex}`);
    },
  };

  return (
    <div className="slide-container">
      <Slide {...slideProperties}>
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className="each-slide"
            style={{ backgroundImage: `url(${slideImage.url})` }}
          >
            {/* <span>{slideImage.caption}</span> */}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlidingImage;
