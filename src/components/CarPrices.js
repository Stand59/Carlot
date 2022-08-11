import Card; from "./Card";

const prices [
    15,000,
    12,000
]

const CarPrices = () => {
    return (
        <div>
            {prices.map((price) => (
                <Card cprices={price}/>
            ))}
        </div>
    )
}


export default PriceList;