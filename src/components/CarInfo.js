
import corvet from "../assets/corvet.jpg"
import mustang from "../assets/download.jpg"

const cars = [
    {
        name: "Mustang",
        cost: 21000,
        image: {mustang}
    },
    {
        name: "Corvet",
        cost: 23329,
        image: {corvet}
    },
    {
        name: "VW",
        cost: 4000000,
        image: {corvet}
    }
];


const CarInfo = () => {
    return (
        <div>
            {cars.map(({name, cost, image}) => (
                <Card names={name} prices={cost} src={image}/>
            ))}
        </div>
    );
};

const Card = (props) => {
    return (
        <div>
            <card className="card">
                <img src={require('../assets/corvet.jpg')} alt={props.names}></img>
                <div className="container">
                    <h4><b>{props.names}</b></h4>
                    <p>{props.prices}</p>
                </div>
            </card>
            <img src='{props.image}' alt={props.names}></img>
        </div>
       
    );
}

export default {Card, CarInfo};
