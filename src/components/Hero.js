import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero section full-width-section">
      <div className="section-inner">
        <div className="hero-desc">
          <p className="title">Little Lemon</p>
          <p className="subtitle">Chicago</p>
          <p className="desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="reserve-btn btn">Reserve a table</button>
          </Link>
        </div>
        <div className="img-wrapper">
          <img
            className="hero-img"
            src="/images/restauranfood.jpg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
