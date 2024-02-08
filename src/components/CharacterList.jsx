import CharacterCard from "./CharacterCard"


function CharacterList({character}) {

  const renderCharacter= character.map((char)=>{
    return <li key={char.id}> <CharacterCard char ={char}/></li>

  })






  return (
    <div>
      <ul>
        {renderCharacter}
      </ul>
    </div>
  )
}

export default CharacterList