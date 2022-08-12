import Card from "./Card";

const cars = [
    'Mustang',
    'Corvet',
    'MiniVan'
];

const prices = [
    15000,
    12000
];

const CarInfo = () => {
    return (
        <div>
            {cars.map((car) => (
                <Card cnames={car} />
            ))}
        </div>
    );
};

export default CarInfo;