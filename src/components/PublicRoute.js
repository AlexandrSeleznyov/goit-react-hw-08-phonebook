import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import { Route, Redirect } from "react-router";

export default function PrivateRoute({
  children,
  restricted = false,
  redirectTo = "/contacts",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
