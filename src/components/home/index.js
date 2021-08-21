import React, { Fragment } from "react";

// import styles
import "./style.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="home-wrapper">
          <h2 className="subtitle text-center">
            coordinated-crypto-art-skunk-pools
          </h2>
          <h1 className="title text-center">DeFi Art Game</h1>
          <p className="text text-center">
            Where NFTs meet DeFi in a Virtual Arcade
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
