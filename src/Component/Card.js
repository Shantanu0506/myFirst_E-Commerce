import { Link } from "react-router-dom";
function Card(props) {
    return (
        <>
            <h4 className="text-center bg-danger">******</h4>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src={props.img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <p className="card-text">{props.name}</p>
                    <h3 className="card-text">{props.price}</h3>
                    <Link to={`/productdetails/${props.id}`} href="#" className="btn btn-primary">See More</Link>
                </div>
            </div>
                </div>
                <div className="col-sm-4"></div>
            </div>
            


        </>
    )
}
export default Card;