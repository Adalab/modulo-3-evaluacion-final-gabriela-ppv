import { Link } from "react-router-dom";


function CharacterCard({char}) {

const imgRem ="https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg";



  return (
    <div className= "card">
      <Link to={`/detail/${char.id}`}>
     <img src={char.image || imgRem} alt={char.name} className="imgCard"/>
     </Link>
      <h3>{char.name}</h3>
      <p>{char.specie}</p>
      
      </div>
  )
}

export default CharacterCard