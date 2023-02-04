import Carousel from 'react-bootstrap/Carousel';
import  imagen1  from "../../assets/img/placard-ejemplo.jpg"
import  imagen2  from "../../assets/img/placard-c.jpg"
import  imagen3  from "../../assets/img/cocina.jpg"


const Carrusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagen1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagen2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagen3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel