import React from 'react';
import { Link } from "react-router-dom"


const BeerDetails = () => {
  
  const beer = JSON.parse(window.localStorage.getItem("beer"))
  
  return (
    <div className="wrapper">
      <div className="beer-details">
        <Link className="back" to="/">
          <span> {" << "} go back</span>
        </Link>
        <h3 className="beer-name">{beer.name}</h3>
        <img className="img" src={beer.image_url} />
        <div className="beer-info">
          <h4 className="abv">ABV: {beer.abv}</h4>
          <p className="tagline">{beer.tagline}</p>
          <p>{beer.description}</p>
        </div>
      </div>
    </div>
  )
}
export default BeerDetails