import CardList from "./CardList";
import { useEffect, useState } from "react";
import useCustomApi from "./useCustomApi";


function App() {

    const [url, setUrl] = useState("http://localhost:3000/products");
    const { products1: products, loading:load } = useCustomApi(url);  //custome api create

    console.log(products);

    return (
        <>
            <h1 className="text-center">E-Gadgets Shop</h1>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
        <div id="button-group">
                <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=mobile")}>Smart_Phone</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=watch")}>Smart_Watch</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=tv")}>Smart_Tv</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=washing_machine")}>Washing_Machine</button>
            </div>
                </div>
                <div className="col-3"></div>

            </div>
            

            {
                load && <button className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm"></span>
                    Loading..
                </button>
            }

            <CardList products1={products} />
            
        </>
    );
}

export default App;

