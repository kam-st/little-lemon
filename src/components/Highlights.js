import React from "react";

function Highlights({ children }) {
  return (
    <section className="section menu">
      <div className="menu-desc">
        <p className="title menu-title">This weeks specials!</p>
        <button className="btn">Online Menu</button>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Highlights;
