import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Artists from "../pages/Artists";
import Buyers from "../pages/Buyers";
import Liquidity from "../pages/Liquidity";
import Header from "../components/header";
class MainRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artists} />
          <Route path="/buyers" component={Buyers} />
          <Route path="/liquidity" component={Liquidity} />
        </Router>
      </>
    );
  }
}

export default MainRouter;
