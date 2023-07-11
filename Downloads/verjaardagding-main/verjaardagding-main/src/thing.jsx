import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './thing.css';
export default function Thing() {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('/products.json')
      .then(response => response.json())
      .then(data => {
          setProducts(Object.values(data));
          products.forEach(element => {
            if (element.id == id) {
              setName(element.id);
              setPrice(element.price);
              setLink(element.link);
              setImg(element.img);
              setWaarom(element.waarom);
              setMeeBetalen(element.Meebetalen);
            }
          });
        }, [])
      })


    // Fetch products.json from the public dir and get the element that matches the id in the URL
    // Fetch the JSON data from products.json


    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [link, setLink] = useState("");
    const [img, setImg] = useState("");
    const [waarom, setWaarom] = useState("");
    const [meeBetalen, setMeeBetalen] = useState(0);
  return (
      <div id="page">
        <div id="priceandname">
        <h1>{name}</h1>
        {meeBetalen != "0%" ? <p id='meebetalen'>Ik wil graag {meeBetalen} meebetalen aan dit cadeau.</p> : ""}
        <h2>€{price.toString().replace('.', ',')}</h2>
        </div>
        <div id="imageanddescription">
          <img src={img} alt={name} />
          <p><span>Waarom:<br></br></span>{waarom}</p>
        </div>
        <div id="links">
        <Link to="/" className="view">Home</Link>
        <a href={link} target="_blank" rel="noreferrer" className="view">Bekijk op externe site</a>
        </div>
      </div>
    );
}