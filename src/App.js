import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";

// const CheckoutTemplateLazy = lazy(() =>
//   import("./templates/CheckoutTemplate/CheckoutTemplate")
// );

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/home" exact Component={Home} />
      <HomeTemplate path="/contact" exact Component={Contact} />
      <HomeTemplate path="/news" exact Component={News} />
      <HomeTemplate path="/detail/:id" exact Component={Detail} />
      <UserTemplate path="/login" exact Component={Login} />
      <UserTemplate path="/register" exact Component={Register} />

      <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
      </Suspense> */}
      <HomeTemplate path="/" exact Component={Home} />
    </Router>
  );
}

export default App;
