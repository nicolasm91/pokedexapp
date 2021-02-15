import React from "react";
import "../styles/pokemoncard.css";

const PokemonCard: React.FunctionComponent = () => {
  return (
    <div className="card col-lg-2 col-md-3 col-sm-3 mx-2 my-2">
      <div className="card-header d-flex justify-content-center"># 006</div>

      <div className="card-body">
        <img className="d-block mx-auto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="" />
        <div className="card-text d-flex justify-content-center">
          <h5 className="card-title">Charizard</h5>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <span className="badge bg-secondary type-fire mx-1">Fire</span>
        <span className="badge bg-secondary type-flying mx-1">Flying</span>
      </div>
    </div>
  );
};

export default PokemonCard;
