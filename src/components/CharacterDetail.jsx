import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types";

function CharacterDetail({character}) {

const { id } =useParams();


const findCharacter = character.find((char)=> char.id === id)
console.log(findCharacter);

const imgRem ="https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg";


const renderCard =()=>{
  if(findCharacter){
    return <div className="detail">
   
<img src={findCharacter.image || imgRem} alt={findCharacter.name} className="imgCard"/>
    <h3>{findCharacter.name}</h3>
    <p>Estatus: {findCharacter.estatus ===true ? ( <>
            Con vida <i className="fa-solid fa-heart-pulse" style={{ color: "black" }}></i>
              </> ) : (<>Ha muerto <i className="fa-solid fa-skull" style={{ color: "black" }}></i> </>
         )}</p>
    
        <p> {findCharacter.alternate_names && findCharacter.alternate_names.length > 0 ? (
    <span>Nombres alternativos: {findCharacter.alternate_names.join(", ")}</span>) : null}</p>
    <p>Especie: {findCharacter.specie}</p>
    <p> Genero: {findCharacter.gender}</p>
    <p> Casa: {findCharacter.house}</p>

  </div>
  } else{
    return null;
  }
}
  
    return(
    <div>
      <Link to= "/" > <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>Volver</Link> 
      {renderCard()}
      </div>
      
     
    ) 
   
  
}
CharacterDetail.propTypes ={
  character: PropTypes.array,
  
}


export default CharacterDetail