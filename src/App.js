import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
