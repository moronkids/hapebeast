import React from "react";
import hpbackground from "assets/img/hpbackground.webp";
import hbtext from "assets/img/hbtext.png";
function Home() {
  return (
    <>
      <div className="landing-page">
        <div className="bg-img"></div>
        <div className="landing-page-content">
          <div className="branding-site">
            <img src={hbtext} alt="" width="100%" />
          </div>
          <div className="content-site">
            <div>
              Price per mint is 0.2 <br /> ETH Allocation: 1 NFT per wallet
              address <br /> 1. Connect your wallet with MetaMask <br /> 2.
              Click on button to mint your Hape
            </div>
            <div className="button-connect-wallet">Connect Wallet</div>
          </div>
          <div className="footer-site">
            © 2021 HAPEBEAST & Digimental Studio London. Apedemption Genesis.
            Apes forever.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
