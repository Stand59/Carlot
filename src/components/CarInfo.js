import Card from "./Card";
import corvette from "../assets/corvette.jpg"
import mustang from "../assets/download.jpg"
import vw from "../assets/download-1.jpg"
import { Container, Row, Col } from "reactstrap";

const cars = [
    {
        id:0,
        name: "Corvette",
        cost: 21000,
        image: corvette
    },
    {
        id:1,
        name: "Mustang",
        cost: 23329,
        image: mustang
    },
    {
        id:2,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:3,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:4,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:5,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:6,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:7,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:8,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:9,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:10,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:11,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:12,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:13,
        name: "VW",
        cost: 4000000,
        image: vw
    },
    {
        id:14,
        name: "VW",
        cost: 4000000,
        image: vw
    },
];


const CarInfo = () => {
    return (
        <div>
            <Container display="ms-auto">
                <Row>
                    {cars.map((car) => (
                        <Col key={car.id}>
                            <Card car={car}/>
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