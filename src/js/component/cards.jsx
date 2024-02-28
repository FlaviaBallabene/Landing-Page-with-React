import React from "react";

const Cards = () => {
  return (
    <div className="row">
      {/* First Card */}
      <div className="col-md-3">
        <div className="card mx-auto text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-img-top" style={{ backgroundColor: "#f0f0f0", height: "200px", border: "1px solid #ccc" }}>
            {/* This is the blank box */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Card title </h5>
            <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam sit totam pariatur ...</p>
            <a href="#" className="btn btn-primary d-block mx-auto">Found out more!</a>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col-md-3">
        <div className="card mx-auto text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-img-top" style={{ backgroundColor: "#f0f0f0", height: "200px", border: "1px solid #ccc" }}>
            {/* This is the blank box */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Card title </h5>
            <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam sit totam pariatur ...</p>
            <a href="#" className="btn btn-primary d-block mx-auto">Found out more!</a>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card mx-auto text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-img-top" style={{ backgroundColor: "#f0f0f0", height: "200px", border: "1px solid #ccc" }}>
            {/* This is the blank box */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Card title </h5>
            <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam sit totam pariatur ...</p>
            <a href="#" className="btn btn-primary d-block mx-auto">Found out more!</a>
          </div>
        </div>
      </div>

	  <div className="col-md-3">
        <div className="card mx-auto text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-img-top" style={{ backgroundColor: "#f0f0f0", height: "200px", border: "1px solid #ccc" }}>
            {/* This is the blank box */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Card title </h5>
            <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam sit totam pariatur ...</p>
            <a href="#" className="btn btn-primary d-block mx-auto">Found out more!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

