import FilterGender from "./FilterGender";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import PropTypes from "prop-types";
import "../scss/layaut/Button.scss";
import "../scss/layaut/Form.scss";

function Filters({
  filterNameChar,
  handleFilterName,
  handleFilterHouse,
  handleReset,
  filterHouseChar,
  handleFilterGender,
  filterGender,
}) {
  const handleClickReset = (event) => {
    event.preventDefault();
    handleReset();
  };

  return (
    <form className="form">
      <h2>Tus Personajes</h2>
      <FilterName
        filterNameChar={filterNameChar}
        handleFilterName={handleFilterName}
      />
      <FilterHouse
        handleFilterHouse={handleFilterHouse}
        filterHouseChar={filterHouseChar}
      />
      <FilterGender
        handleFilterGender={handleFilterGender}
        filterGender={filterGender}
      />
      <button className="button" onClick={handleClickReset}>
        Reset
      </button>
    </form>
  );
}

Filters.propTypes = {
  filterNameChar: PropTypes.string,
  handleFilterName: PropTypes.func,
  handleFilterHouse: PropTypes.func,
  handleReset: PropTypes.func,
  filterHouseChar: PropTypes.string,
  handleFilterGender: PropTypes.func,
  filterGender: PropTypes.string,
};

export default Filters;
