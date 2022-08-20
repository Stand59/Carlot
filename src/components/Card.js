import  '../App.css';





const Card = ({car}) => {
    const { image, name, cost} = car;
    return (
        <div className="card">
                <img src={image} alt={name}></img>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>Price: ${cost}</p>
            </div>
        </div>      
    );
};

export default Card;