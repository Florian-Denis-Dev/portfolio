import React from "react";
import img from "../../assets/404.png";
import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="conteneur-error">
            <div className="image-error">
                <img src={img} alt="404"></img>
            </div>
            <div className="titre-error">
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className="link-error">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}

export default Error