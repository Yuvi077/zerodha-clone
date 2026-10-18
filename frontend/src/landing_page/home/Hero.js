
import React from "react";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="https://zerodha.com/static/images/landing.png"
            alt="Zerodha trading platform"
            className="img-fluid mb-5"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <h1 className="mt-4">Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button
          className="btn btn-primary btn-lg mb-5"
          style={{ width: "fit-content", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;