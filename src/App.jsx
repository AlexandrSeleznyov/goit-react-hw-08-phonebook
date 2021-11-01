import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import ContactsView from "./views/ContactsView/ContactsView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import AppBar from "./components/AppBar/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import { authSelectors } from "./redux/auth";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  console.log(isFetchingCurrentUser);
  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
          <Redirect path="/" />
        </Switch>
      </div>
    )
  );
}
export default App;
