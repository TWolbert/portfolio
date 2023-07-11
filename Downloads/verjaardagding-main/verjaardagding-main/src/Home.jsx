import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch all items from products.json add them to the page 
        fetch('/products.json')
        .then(response => response.json())
        .then(data => {
            setProducts(Object.values(data));
        })
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    let i = 1;
    return (
        <div>
            <div id="top">
            <h1>Mijn verlanglijst</h1>
            <p>Hieronder zie je een lijst met dingen die ik wil voor mijn verjaardag, als je andere ideeën hebt, ga je gang :)</p>
            </div>
            <div id="giftholder">
                {products.map(product => (
                    <div className="gift" key={product.id}>
                        <h2>{product.id}</h2>
                        <h3>€{product.price.toString().replace('.', ',')}</h3>
                        <img src={product.img} alt={product.name} />
                        <Link to={`/thing/${product.id}`} className="view" key={product.id}>Bekijk</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
