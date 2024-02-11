
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import gryfi from "../images/gryffindor.jpg";
import ravenc from "../images/ravenclaw.jpg";
import slyter from "../images/slytherin.jpg";
import huffle from "../images/hufflepuff.jpg";

function CharacterDetail({ character }) {
  const { id } = useParams();

  if (!character || character.length === 0) {
    return <div>Loading...</div>;
  }

  const findCharacter = character.find((char) => char.id === id);

  if (!findCharacter) {
    return <div>Character not found</div>;
  }

  const imgRem = "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg";

  let coverHouse;
  if (findCharacter.house === "Ravenclaw") {
    coverHouse = ravenc;
  } else if (findCharacter.house === "Gryffindor") {
    coverHouse = gryfi;
  } else if (findCharacter.house === "Slytherin") {
    coverHouse = slyter;
  } else {
    coverHouse = huffle;
  }

  return (
    <div className="div">
      <Link to="/" className="link--volver">
        
        <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>{" "}
        Volver
      </Link>
      <div className="detail">
        <img
          src={findCharacter.image || imgRem}
          alt={findCharacter.name}
          className="imgCard"
        />
        <h3>{findCharacter.name}</h3>
        <p>
          Estatus:{" "}
          {findCharacter.estatus === true ? (
            <>
              Con vida
              <i
                className="fa-solid fa-heart-pulse"
                style={{ color: "black" }}
              ></i>
            </>
          ) : (
            <>
              Ha muerto
              <i className="fa-solid fa-skull" style={{ color: "black" }}></i>
            </>
          )}
        </p>

        <p>
          
          {findCharacter.alternate_names &&
          findCharacter.alternate_names.length > 0 ? (
            <span>
              Nombres alternativos:
              {findCharacter.alternate_names.join(", ")}
            </span>
          ) : null}
        </p>
        <p>Especie: {findCharacter.specie}</p>
        <p> Genero: {findCharacter.gender}</p>
        <p> Casa: {findCharacter.house}</p>
        {coverHouse ? (
          <img src={coverHouse} alt="imagen escudo house"  className="coverhouse"/>
        ) : null}
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.array,
};

export default CharacterDetail;
