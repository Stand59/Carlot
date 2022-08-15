import Card from "./Card";
import corvet from "../assets/corvet.jpg"
import mustang from "../assets/download.jpg"
import vw from "../assets/download-1.jpg"
import { Container, Row, Col } from "reactstrap";

const cars = [
    {
        name: "Mustang",
        cost: 21000,
        image: corvet
    },
    {
        name: "Corvet",
        cost: 23329,
        image: mustang
    },
    {
        name: "VW",
        cost: 4000000,
        image: vw
    }
];


const CarInfo = () => {
    return (
        <div>
            <Container display="ms-auto">
                <Row>
                    {cars.map(({name, cost, image}) => (
                        <Col md='2' className='m-4' key={cars.id}>
                            <Card names={name} prices={cost} img={image}/>
                        </Col>
                    ))}
                </Row>
            </Container> 
        </div>
    );
};

//https://stackoverflow.com/questions/48848462/how-to-show-results-of-a-map-in-two-or-more-columns-using-react//
//https://www.appsloveworld.com/reactjs/100/11/how-to-show-results-of-a-map-in-two-or-more-columns-using-react//

export default CarInfo;