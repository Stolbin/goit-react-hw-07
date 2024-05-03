import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../../../goit-react-hw-06/src/redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (name) => {
    dispatch(changeFilter(name));
  };

  return (
    <>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search by name"
        className={css.input}
      />
    </>
  );
};

export default SearchBox;
