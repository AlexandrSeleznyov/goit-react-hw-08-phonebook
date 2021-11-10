import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts, getIsLoading } from "../../redux/selectors";
import { fetchContacts, deleteContactsOperation } from "../../redux/operations";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ContactsList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <TableContainer component={Paper} sx={{ m: 1, width: "83ch" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleContacts.map((contact) => (
            <StyledTableRow key={contact.id}>
              <StyledTableCell component="th" scope="row">
                {contact.name}
              </StyledTableCell>
              <StyledTableCell align="right">{contact.number}</StyledTableCell>
              <StyledTableCell align="right">
                {
                  <Button
                    type="submit"
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      dispatch(deleteContactsOperation(contact.id))
                    }
                  >
                    Delete
                  </Button>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  // return (
  //   <ul>
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : visibleContacts.length > 0 ? (
  //       visibleContacts.map((contact) => (
  //         <li key={contact.id}>
  //           {contact.name}: {contact.number}
  //           <button
  //             type="button"
  //             onClick={() => dispatch(deleteContactsOperation(contact.id))}
  //           >
  //             Delete
  //           </button>
  //         </li>
  //       ))
  //     ) : (
  //       <p>User not found</p>
  //     )}
  //   </ul>
  // );
}

export default ContactsList;
