import Card from "./Card";
import corvet from "../assets/corvet.jpg"
import mustang from "../assets/download.jpg"


const cars = [
    {
        name: "mustang",
        cost: 21000,
        image: corvet
    },
    {
        name: "corvet",
        cost: 23329,
        image: mustang
    },
    {
        name: "VW",
        cost: 4000000,
        image: corvet
    }
];


const CarInfo = () => {
    return (
        <div>
            {cars.map(({name, cost, image}) => (
                <Card names={name} prices={cost} img={image}/>
            ))}
        </div>
    );
};

export default CarInfo;