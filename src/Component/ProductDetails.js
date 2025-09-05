import { useParams } from "react-router-dom";
import useCustomApi from "./useCustomApi";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PrductDetails(){

    const navigate = useNavigate();
    const data = useParams();
    //console.log(data.pid);

    const{products1 : p} = useCustomApi(`http://localhost:3000/products/${data.pid}`);
    // console.log(p);

    return (
        <>
        <h2>This is my Details page!</h2>
        <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src={p.img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{p.id}</h4>
                    <p className="card-text">{p.name}</p>
                    <h3 className="card-text">{p.price}</h3>
                    <Link to="#" className="btn btn-primary">Add to card</Link>
                    <button className="btn btn-success" 
                    onClick = {()=>{
                        setTimeout (()=>{
                                navigate('/product');
                        },2000);
                        
                    }} >Back 🔙</button>
                </div>
            </div>

        </>
    );
}

export default PrductDetails;