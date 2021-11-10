import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import s from "./LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    // switch (name) {
    //   case "email":
    //     return setEmail(value);
    //   case "password":
    //     return setPassword(value);
    //   default:
    //     return;
    // }

    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Box className={s.container}>
      <Typography variant="h4" className={s.title}>
        LOGIN PAGE
      </Typography>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          sx={{ m: 1, width: "65ch" }}
          className={s.label}
          required
          id="outlined-required"
          type="email"
          label="Email"
          name="email"
          margin="dense"
          width="300"
          value={email}
          onChange={handleChange}
        />
        <TextField
          sx={{ m: 1, width: "65ch" }}
          className={s.label}
          required
          id="outlined-required"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          sx={{ m: 1, width: "72ch", height: "7ch" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          SIGN IN
        </Button>
      </form>
    </Box>
  );
}
