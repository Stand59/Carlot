import Images from "./Images.js";
import corvet from "../assets/corvet.jpg"
import download from "../assets/download.jpg"

const images = [ corvet, download ]
     
    


const Photos = () => {
    return (
        <div>
            {images.map(({image}) => (
                <Images img={image}/>
            ))}
        </div>
    );
};

export default Photos;