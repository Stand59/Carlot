import  '../App.css';





const Card = (props) => {
    return (
        <card className="card">
                <img src={props.img} alt={props.names}></img>
            <div className="container">
                <h4><b>{props.names}</b></h4>
                <p>Price: ${props.prices}</p>
            </div>
        </card>      
    );
};

export default Card;