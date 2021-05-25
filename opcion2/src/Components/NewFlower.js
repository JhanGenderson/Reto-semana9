import React from "react";
import Img from "./Imagenes";

export default function NewFlower() {
  return (
    <div className="container bg-success">
        <h1 className="text-center mt-3 mb-3">NEW FLOWERS</h1>
      <div className="row row-cols-1 g-3 ">
        <div className="card-group ">
          <div className="card row">
            <img
              src={Img.Azucena}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Azucena</h5>
            </div>
          </div>
          <div className="card row">
            <img
              src={Img.Gardenia}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Gardenia</h5>
            </div>
          </div>
          <div className="card row">
            <img
              src={Img.Girasol}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Girasol</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Otras flores */}
      <h1 className="text-center mt-3 mb-3">RELEVANT</h1>
      <div className="row row-col-1 g-4">
        <div className="card-group">
          <div className="card row">
            <img
              src={Img.Rosa}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Azucena</h5>
            </div>
          </div>
          <div className="card row">
            <img
              src={Img.Tulipan}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Gardenia</h5>
            </div>
          </div>
          <div className="card row">
            <img
              src={Img.Violeta}
              className="card-img-top bg-success"
              alt=""
              height="200"
            />
            <div className="card-body bg-success">
              <h5 className="text-center">Nombre: Girasol</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
