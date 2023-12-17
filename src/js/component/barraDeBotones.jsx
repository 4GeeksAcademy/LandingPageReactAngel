//import react into the bundle
import React from "react";
function Navbar() {
    return (
   <div className="bg-dark justify-content-between">
     

      <nav className="navbar navbar-expand-lg bg-dark" expand="md">
      <div className="container-fluid m-2 d-flex justify-content-between">
      <a className="navbar-brand text-white w-100 flex-grow-1" href="#">
            Turismo Bootstrap
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto ml-auto float-right" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-muted" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-muted">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
    )
}

export default Navbar