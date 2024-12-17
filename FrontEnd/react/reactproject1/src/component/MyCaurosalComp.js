import Carousel from 'react-bootstrap/Carousel';
import BejeshFunComp from "../task/BejeshFunComp"
import EmpDetails from "../task/EmpDetails"
import MyCounterComp from "../task/MyCounterComp"

function MyCaurosalComp() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <BejeshFunComp text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <EmpDetails text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <MyCounterComp text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCaurosalComp;
