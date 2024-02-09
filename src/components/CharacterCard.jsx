

function CharacterCard({char}) {

const imgRem ="https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-la-piedra-filosofal-677923633-large-1636701473.jpg?crop=0.793xw:1.00xh;0.104xw,0&resize=640:*";



  return (
    <div className= "card">
      <img src={char.image || imgRem} alt={char.name} className="imgCard"/>
      <h3>{char.name}</h3>
      <p>{char.specie}</p>
      </div>
  )
}

export default CharacterCard