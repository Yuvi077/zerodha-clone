
import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 p-md-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.3+ crore customers trust Zerodha with
            ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, gamification, or annoying push
            notifications. High-quality apps that you use at your
            pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments
            in fintech startups offer services tailored to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't
            just facilitate transactions, but help you make better
            decisions with your money.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
  src="/media/images/ecosystem.png"
  alt="Zerodha ecosystem"
  style={{ width: "90%" }}
/>

          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            <a
              href="https://zerodha.com/products/"
              className="text-decoration-none"
            >
              Explore our products →
            </a>

            <a
              href="https://kite.zerodha.com/"
              className="text-decoration-none"
            >
              Try Kite →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
