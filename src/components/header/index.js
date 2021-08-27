/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment, useState } from "react";
import { useWallet, UseWalletProvider } from "use-wallet";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// import style
import "./style.scss";

// import images
import Fox from "../../assets/fox.svg";

const Header = () => {
  const wallet = useWallet();

  // Modal Hooks
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      {wallet.status === "connected" ? (
        <Fragment>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Account Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h4>Account:</h4> 
                <p>{wallet.account}</p>
              </div>
              <div>
                <h4>Balance:</h4> 
                <p>{wallet.balance}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn-metamask-disconnect" onClick={() => wallet.reset()}>disconnect</button>
              <button className="btn-modal-close" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      ) : (
        <div className="container">
          <div className="header-container">
            <button
              className="btn-metamask"
              onClick={() => {
                wallet.connect();
                handleShow();
              }}
            >
              <img
                src={Fox}
                alt="metamask-img"
                className="img-fluid pr-5"
                width="25"
              />
              Connect to MetaMask
            </button>
            {/* <button onClick={() => wallet.connect("frame")}>Frame</button>
          <button onClick={() => wallet.connect("portis")}>Portis</button> */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: "my-dapp-id-123-xyz" },
    }}
  >
    <Header />
  </UseWalletProvider>
);
