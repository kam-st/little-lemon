import Nav from "./Nav";

export default function Header() {
  return (
    <header className="section full-width-section">
      <div className="section-inner">
        <img src="/images/Logo.svg" alt="little lemon" />
        <Nav />
      </div>
    </header>
  );
}
