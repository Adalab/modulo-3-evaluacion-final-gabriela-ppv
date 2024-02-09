import { useParams } from "react-router-dom"


function CharacterDetail({character}) {

const { id } =useParams();


const findCharacter = character.find((char)=> char.id === id)
console.log(findCharacter);

const imgRem ="https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg";


const renderCard =()=>{
  if(findCharacter){
    return <div className="detail">
    <p> volver</p>
<img src={findCharacter.image || imgRem} alt={findCharacter.name} className="imgCard"/>
    <h3>{findCharacter.name}</h3>
    <p>{findCharacter.estatus}</p>
    <p>{findCharacter.specie}</p>
    <p>{findCharacter.gender}</p>
    <p>{findCharacter.house}</p>


  </div>
  } else{
    return null;
  }
}

    
  
    return(
    <div>
      {renderCard()}
      </div>
      
     
    ) 
   
  
}

export default CharacterDetail