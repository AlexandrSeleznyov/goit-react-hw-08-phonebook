import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AppBar from "./components/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
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
        </Switch>
      </div>
    )
  );
}
export default App;
