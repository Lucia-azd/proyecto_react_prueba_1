import {
    Carousel, Jumbotron, Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const CarouselBootstrap  = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-xs.png"
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-12.png"
                    alt="Second slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-ipad-air.png"
                    alt="Third slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-xr.png"
                    alt="Third slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-macpro.png"
                    alt="Third slide"
                />
                </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBootstrap;