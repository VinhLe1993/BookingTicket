import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/home" exact Component={Home} />
      <HomeTemplate path="/contact" exact Component={Contact} />
      <HomeTemplate path="/news" exact Component={News} />
      <Route path="/login" exact Component={Login} />
      <Route path="register" exact Component={Register} />
      <HomeTemplate path="/" exact Component={Home} />
    </Router>
  );
}

export default App;
