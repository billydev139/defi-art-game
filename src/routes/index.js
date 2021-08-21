import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
class MainRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </>
    );
  }
}

export default MainRouter;
