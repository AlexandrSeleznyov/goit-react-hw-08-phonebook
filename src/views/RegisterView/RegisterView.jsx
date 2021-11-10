import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./RegisterView.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Box className={s.container}>
        <Typography variant="h4" className={s.title}>
          REGISTRATION PAGE
        </Typography>

        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <TextField
            sx={{ m: 1, width: "65ch" }}
            className={s.label}
            required
            id="outlined-required"
            type="text"
            label="Name"
            name="Name"
            margin="dense"
            width="300"
            value={name}
            onChange={handleChange}
          />

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
            label="Password"
            name="password"
            margin="dense"
            width="300"
            value={email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{ m: 1, width: "72ch", height: "7ch" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            REGISTER
          </Button>
        </form>
      </Box>
    </div>
  );
}
