import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import s from "./AppBar.module.css";

export default function MainAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar
      position="static"
      className={s.header}
      sx={{ flexDirection: "row" }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
