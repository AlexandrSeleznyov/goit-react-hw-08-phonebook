import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label>
      Find contacts by name:
      <input
        onChange={(e) => dispatch(actions.filterContacts(e.target.value))}
        type="text"
        value={filter}
        name="filter"
        placeholder="find name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
