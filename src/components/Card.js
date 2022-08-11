import  '../App.css';
import Mustang from '../assets/download.jpg';


const Card = (props) => {
    return (
        <card className="card">
            <img src={Mustang}></img>
            <div class="container">
                <h4><b>{props.cnames}</b></h4>
                <p>{props.cprices}</p>
            </div>
        </card>
    );
}

export default Card;