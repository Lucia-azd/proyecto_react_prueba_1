import {
    Carousel
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const CarouselBootstrap  = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-xs.png"
                    alt="banner-iphone-xs"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-12.png"
                    alt="banner-iphone-12"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-ipad-air.png"
                    alt="banner-ipad-air"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-iphone-xr.png"
                    alt="banner-iphone-xr"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banners/banner-macpro.png"
                    alt="banner-macpro"
                />
                </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBootstrap;