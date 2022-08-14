import  '../App.css';
import corvet from "../assets/corvet.jpg"
import mustang from "../assets/download.jpg"





const Card = (props) => {
    return (
        <div className="row">
            <div className="column">
                <card className="card">
                        <img src={props.img} alt={props.names}></img>
                    <div className="container">
                        <h4><b>{props.names}</b></h4>
                        <p>Price: ${props.prices}</p>
                    </div>
                </card>
            </div>
        </div>
    );
};

export default Card;