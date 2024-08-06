import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

function CarouserPage() {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay={true}
                showThumbs={true}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                transitionTime={1000}
                className="carousel"
            >
                <div className="slide-holder">
                    <img
                        alt="img1"
                        src={img1}
                    />

                </div>
                <div className="slide-holder">
                    <img
                        alt="img2"
                        src={img2}
                    />
                    
                </div>
                <div className="slide-holder">
                    <img
                        alt="img3"
                        src={img3}
                    />
                    
                </div>
                <div className="slide-holder">
                    <img
                        alt="img4"
                        src={img4}
                    />
                    
                </div>
            </Carousel>
        </div>
    );
}

export default CarouserPage