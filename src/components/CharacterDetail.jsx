import { Link, useParams } from "react-router-dom"


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
    <p>
          Estatus:
          {findCharacter.estatus ===true ? (
            <>
              <i className="fa-solid fa-heart-pulse" style={{ color: "black" }}></i>
              Con vida
            </>
          ) : (
            <>
              <i className="fa-solid fa-skull" style={{ color: "black" }}></i>
              Ha muerto
            </>
          )}
        </p>
    
    {/* <p>Estatus:{findCharacter.estatus === true ? ("Con vida"):("Ha muerto")}</p> */}
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

export default CharacterDetail