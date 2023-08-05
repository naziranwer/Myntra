import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const SlidingImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show 1 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed (in milliseconds) as needed
    arrows: false,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box zIndex={0} position="relative">
        <div style={{ maxWidth: "1500px" }}>
          <Slider {...settings}>
            <div>
              <img
                src="../../images/slide1.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide2.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide3.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide4.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide5.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide6.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide7.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="../../images/slide8.png"
                alt="Slide 1"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </Slider>
        </div>
      </Box>
    </div>
  );
};

export default SlidingImage;
