import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";


function App() {
  const [character,setCharacter] = useState ([]);


useEffect(()=>{
  getDataApi().then((cleanData)=>{
    setCharacter(cleanData);

  })
},[])

  return (
    <div>App
 <Routes>
<Route path="/" element={ <CharacterList character ={character}/>}/>

 </Routes>


    </div>
  )
}

export default App