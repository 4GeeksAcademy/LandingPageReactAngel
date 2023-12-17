import React from "react";

function Card(props) {
    return (
        <div className="card m-3 mx-auto">
            <img src={props.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.parrafo}</p>
                <a href="#" className="btn btn-primary">{props.boton}</a>
            </div>
        </div>
    )
};

export default Card;