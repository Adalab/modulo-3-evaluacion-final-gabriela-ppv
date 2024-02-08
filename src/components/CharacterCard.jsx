

function CharacterCard({char}) {





  return (
    <div className= "card">
      <img src={char.image} alt={char.name} className="imgCard"/>
      <h3>{char.name}</h3>
      <p>{char.specie}</p>
      </div>
  )
}

export default CharacterCard