import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./Pages/App";
import Calculator from "./Pages/Calculator";
// import NotFound from "./pages/NotFound";

const BasicExample = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
};

export default BasicExample;
