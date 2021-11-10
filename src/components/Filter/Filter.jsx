import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { getFilter } from "../../redux/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import s from "./filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  //const filter = useSelector(getFilter);
  const handleOnChange = (e) =>
    dispatch(actions.filterContacts(e.target.value));
  return (
    <Box className={s.wrapper}>
      <Typography variant="div">Find contacts by name</Typography>
      <TextField
        sx={{ m: 1, width: "83ch" }}
        id="standard-search"
        label="Search field"
        type="search"
        name="filter"
        variant="standard"
        onChange={handleOnChange}
        margin="normal"
      />
    </Box>
  );
};

export default Filter;
