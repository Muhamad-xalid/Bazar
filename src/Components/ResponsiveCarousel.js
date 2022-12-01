import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
export default function ResponsiveCarousel() {
  return (
    <div >
         <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}  showIndicators={false}>
                <div>
                    <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel_image'/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel_image'/> 
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel_image'/> 
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel_image'/> 
                </div>
            </Carousel>
    </div>
  )
}