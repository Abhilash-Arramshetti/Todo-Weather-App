import React from "react";
import "../styles.css";
function Gallery({ data }) {
  return (
    <div>
      <div>
        {data.map((image) => (
          <div key={image.id} className={image}>
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
              alt={image.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
