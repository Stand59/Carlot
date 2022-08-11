import Card from "./Card";

const cars = [
    'Mustang',
    'Corvet'
];

const prices = [
    15000,
    12000
];

const CarNames = () => {
    return (
        <div>
            {cars.map((car) => (
                <Card cnames={car} />
            ))}
        </div>
    );
};

//have to get rid of one of these//

const CarPrices = () => {
    return (
        <div>
            {prices.map((price) => (
                <Card cprices={price}/>
            ))}
        </div>
    )
}

export default {CarNames, CarPrices} ;