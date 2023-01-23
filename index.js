import { checkAuthorization } from "./auth";

checkSession();

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/home" component={HomePage} />
  </Switch>
</Router>,
document.getElementById("root")
);