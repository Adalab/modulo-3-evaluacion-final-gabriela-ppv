import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"


function Filters({filterNameChar,handleFilterName,handleFilterHouse}) {


  return (
   <form >
    <h2>Tus Personajes</h2>
    <FilterName filterNameChar={filterNameChar} handleFilterName ={handleFilterName}/>
    <FilterHouse handleFilterHouse ={handleFilterHouse}/>

   </form>
  )
}

export default Filters