import CharacterCard from "./CharacterCard"


function CharacterList({character,filterNameChar}) {


  if(character.length ===0){
    return(
      <li>
      <p>
        Ningún título coincide con {filterNameChar}. ¡Inténtalo de nuevo!
      </p>
    </li>
    )
  } else{
   const renderCharacter= character.map((char)=>{
     return <li key={char.id}> <CharacterCard char ={char}/></li>
  
   })

  

  // const renderCharacter= character.map((char)=>{
  //   return <li key={char.id}> <CharacterCard char ={char}/></li>

  // })

  return (
    <div >
      <ul className="container">
        {renderCharacter}
      </ul>
    </div>
  )
}
}
export default CharacterList