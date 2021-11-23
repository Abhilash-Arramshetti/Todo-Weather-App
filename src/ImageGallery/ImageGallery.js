import axios from "axios";
import React, { useState } from "react";
import Gallery from "./Gallery";

function ImageGallery() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
  };
  return (
    <div>
      Gallery Images
      <form onClick={handleSubmit}>
        <input type="text" value={search} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      {data.length >= 1 ? (
        <Gallery data={data} />
      ) : (
        <h2>No Data Loaded Please Check!</h2>
      )}
    </div>
  );
}

export default ImageGallery;
