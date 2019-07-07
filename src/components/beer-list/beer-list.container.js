import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { StyledBeer, StyledSelect} from './beer-list.style'


const BeerList = () => {

  const [beerBase, setBeerBase] = useState("name")
  const [beerAPI, setBeerAPI] = useState([])
  const selection = ["name", "abv"]

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then( ({ data }) => {
        setBeerAPI(data)
        sortBeers(data)
      })
  }, [])

  useEffect(() => {
    sortBeers(beerAPI)
  }, [beerBase])

  const sortBeers = (beerAPI) => beerBase === selection[0] ? setBeerAPI(beerAPI.sort( (a,b) => a.name.localeCompare(b.name))) : setBeerAPI(beerAPI.sort( (a,b) => a.abv-b.abv))
 

  const handleSelection = (e) => {
    const { value } = e.target
    setBeerBase(value)
  }

  return (
    <div style={{position: "relative"}}>
      <h1 className="title">PUNK BEERS</h1>
      <StyledSelect>
        <span>Sort by: </span>
          <select
            defaultValue={beerBase}
            onChange={handleSelection}
            style={{ border:"1px solid black", padding: "2.5px"}}
          >
            {selection.map(select =>
              <option 
                key={select}
                value={select}>
                beer {select}
              </option>
            )}
          </select>
      </StyledSelect>
      <div className="grid-template">
        {beerAPI.map((beer) =>
          <StyledBeer key={beer.name}>
            <h3 style={{ margin: "10px 0 0 0"}}>{beer.name}</h3>
            <h5 style={{ fontStyle: "oblique", margin: "5px 0"}}>ABV: {beer.abv}</h5>
              <img src={beer.image_url} />
              <div >
              <Link className="more-details"  to="/beer-details" onClick={()=>{
                  window.localStorage.setItem("beer", JSON.stringify(beer))
                }}>
                  More details
                </Link>
              </div>
          </StyledBeer>
        )}
      </div>
    </div>
  )
}

export default BeerList
