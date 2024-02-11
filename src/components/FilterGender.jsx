import PropTypes from "prop-types";

function FilterGender({ handleFilterGender, filterGender }) {
  const handleRadio = (ev) => {
    handleFilterGender(ev.target.value);
  };

  return (
    <div>
      <label className="form--label">Genero</label>
      <input
        type="radio"
        name="gender"
        value="f"
        onChange={handleRadio}
        checked={filterGender === "f"}
        className="form--filter__gender"
      />
      <label htmlFor="">Female</label>
      <input
        type="radio"
        name="gender"
        value="m"
        onChange={handleRadio}
        checked={filterGender === "m"}
        className="form--filter__gender"
      />
      <label htmlFor="">Male</label>
    </div>
  );
}

FilterGender.propTypes = {
  handleFilterGender: PropTypes.func,
  filterGender: PropTypes.string,
};

export default FilterGender;
