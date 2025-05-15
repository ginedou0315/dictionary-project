import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <img
                  src={photo.src.landscape}
                  alt="pexel_photo"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <h2>Photos</h2>;
  }
}
