import React from "react";

import Card from "./imagenes";
import Jumbotron from "./barraComponentes";
import Navbar from "./barraDeBotones";

//include images into your bundle


//create your first component
const Home = () => {	
	return (
    <div>
        <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-5">
            <Card titulo="Alemania" parrafo="Disfrute de la naturaleza y los parajes sin barreras." imagen="https://picsum.photos/id/18/500/325" boton="Conoce Alemania"/>
            <Card titulo="Luxemburgo" parrafo="Perenigración, desaceleración y meditación" imagen="https://picsum.photos/id/17/500/325" boton="Conoce Luxemburgo"/>
            <Card titulo="Escocia" parrafo="Con o sin barco, viaje a las islas escocesas en un viaje de ensueño." imagen="https://picsum.photos/id/16/500/325" boton="Conoce Escocia"/>
            <Card titulo="Noruega" parrafo="Ven y conoce el paisaje de los fiordos" imagen="https://picsum.photos/id/10/500/325" boton="Conoce Noruega"/>
        </div>
      </div>
    </div>
    )
};

export default Home;
