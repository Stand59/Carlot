import Card from "./Card";
import corvette from "../assets/corvette.jpg";
import mustang from "../assets/download.jpg";
import vw from "../assets/download-1.jpg";
import minivan from "../assets/minivan.jpg";
import Jetta from "../assets/jetta.jpg";
import armor from "../assets/armor.jpg";
import bavan from "../assets/bavan.jpg";
import deathstar from "../assets/deathstar.jpg";
import flintstone from "../assets/flintstone.jpg";
import helicopter from "../assets/helicopter.jpg";
import herse from "../assets/herse.jpg";
import limo from "../assets/limo.jpg";
import lowrider from "../assets/lowrider.jpg";
import magic from "../assets/magic.jpg";
import slugbug from "../assets/slugbug.jpg";


import '../App.css';
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
        name: "Minivan",
        cost: 13000,
        image: minivan
    },
    {
        id:4,
        name: "Jetta TDI",
        cost: 8000,
        image: Jetta
    },
    {
        id:5,
        name: "Slugbug",
        cost: 14932,
        image: slugbug
    },
    {
        id:6,
        name: "Limosine",
        cost: 50000,
        image: limo
    },
    {
        id:7,
        name: "Heli-car",
        cost: 400000000,
        image: helicopter
    },
    {
        id:8,
        name: "B.A. Van",
        cost: 789888,
        image: bavan
    },
    {
        id:9,
        name: "armored car",
        cost: 3000000,
        image: armor
    },
    {
        id:10,
        name: "Magic School Bus",
        cost: 4100000,
        image: magic
    },
    {
        id:11,
        name: "Flintstone",
        cost: -10,
        image: flintstone
    },
    {
        id:12,
        name: "Herse",
        cost: 20444,
        image: herse
    },
    {
        id:13,
        name: "Death Star",
        cost: '999999999',
        image: deathstar
    },
    {
        id:14,
        name: "Low Rider",
        cost: 8050,
        image: lowrider
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