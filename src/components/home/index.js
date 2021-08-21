import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
          <div className="btn-wrapper">
            <div className="btn-artists text-center">
              <Link to="/artists">Artists - Creators</Link>
            </div>
            <div className="btn-buyers text-center">
              <Link to="/buyers">Buyers - Collectors</Link>
            </div>
          </div>
          <div className="btn-liquidity text-center mt-5">
            <Link to="/buyers">Liquidity Providers</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
