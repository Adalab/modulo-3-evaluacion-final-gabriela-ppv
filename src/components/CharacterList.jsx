import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";


function CharacterList({character,filterNameChar}) {


  if(character.length ===0){
    return(
      <li>
      <p>
        Ningún Personaje coincide con tu busqueda {filterNameChar}. ¡Inténtalo de nuevo!
      </p>
    </li>
    )
  } else{
   const renderCharacter= character.map((char)=>{
     return <li key={char.id}> <CharacterCard char ={char}/></li>
  
   })

  

  return (
    <div >
      <ul className="container">
        {renderCharacter}
      </ul>
    </div>
  )
}
}
CharacterList.propTypes ={
  character:PropTypes.array,
  filterNameChar:PropTypes.string,
}

export default CharacterList