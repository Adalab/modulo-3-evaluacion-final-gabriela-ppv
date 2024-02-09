import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"


function Filters({filterNameChar,handleFilterName,handleFilterHouse, handleReset,filterHouseChar}) {

 const handleClickReset =(event)=>{
  event.preventDefault();
  handleReset();
 }



  return (
   <form >
    <h2>Tus Personajes</h2>
    <FilterName filterNameChar={filterNameChar} handleFilterName ={handleFilterName}/>
    <FilterHouse handleFilterHouse ={handleFilterHouse} filterHouseChar ={filterHouseChar}/>
    <button className="button" onClick={handleClickReset}>Reset</button>

   </form>
  )
}

export default Filters