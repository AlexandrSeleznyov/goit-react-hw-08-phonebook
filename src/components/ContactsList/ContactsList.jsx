import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts, getIsLoading } from "../../redux/selectors";
import { fetchContacts, deleteContactsOperation } from "../../redux/operations";
import { useEffect } from "react";

function ContactsList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => dispatch(deleteContactsOperation(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>User not found</p>
      )}
    </ul>
  );
}

export default ContactsList;
