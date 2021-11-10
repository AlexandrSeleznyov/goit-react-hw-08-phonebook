import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import { addContactsOperation } from "../../redux/operations";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MuiPhoneNumber from "material-ui-phone-number";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (!e.target) {
      const value = e;
      setNumber(value);
    } else {
      const { value } = e.target;
      setName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactsOperation({ name, number, id: uuidv4() }));
    resetState();
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <TextField
        onChange={handleInput}
        sx={{ m: 1, width: "83ch" }}
        className={s.label}
        required
        id="standard-required"
        variant="standard"
        type="text"
        label="Name"
        name="name"
        margin="dense"
        width="300"
        value={name}
      />

      <MuiPhoneNumber
        className={s.input}
        sx={{ m: 1, width: "83ch" }}
        required
        id="outlined-required-name"
        name="number"
        label="Number"
        defaultCountry={"ua"}
        value={number}
        onChange={handleInput}
        margin="normal"
      />
      <Button
        type="submit"
        sx={{ m: 1, width: "92ch", height: "7ch" }}
        variant="contained"
      >
        SAVE
      </Button>
    </form>
  );
}
