import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@mui/material/Button";
import defaultAvatar from "../../assets/images/avatar.png";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        type="button"
        sx={{
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        EXIT
      </Button>
    </div>
  );
}
