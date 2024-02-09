import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";


function App() {
  const [character,setCharacter] = useState ([]);
  const [filterNameChar,setFilterNameChar] = useState ("");
  const [filterHouseChar,setFilterHouseChar]= useState("Gryffindor");


useEffect(()=>{
  getDataApi().then((cleanData)=>{
    setCharacter(cleanData);

  })
},[])


const handleFilterName =(value)=>{
  setFilterNameChar(value);

}

const handleFilterHouse =(value)=>{
  setFilterHouseChar(value);

}

const filterCharacter = character.filter((charac)=>charac.name.toLowerCase().includes(filterNameChar))
.filter((house)=>house.house===filterHouseChar);


const handleReset =()=>{
  
  setFilterNameChar("");
  setFilterHouseChar("Gryffindor");
}



  return (
    <div className="father">
      <h1>Harry Potter</h1>
 <Routes>
<Route path="/" element={ 
<>
<Filters filterNameChar={filterNameChar}  handleFilterName={handleFilterName} handleFilterHouse ={handleFilterHouse} handleReset ={handleReset} filterHouseChar ={filterHouseChar}/>
<CharacterList character ={filterCharacter} filterNameChar={filterNameChar}/>

</>
}/>
<Route path="/detail/:id" element ={ < CharacterDetail character ={character} />}/>

 </Routes>
    </div>
  )
}

export default App