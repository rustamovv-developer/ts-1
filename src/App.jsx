import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Brands from "./components/brands/Brands";
import Products from "./components/products/Products";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Brands />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default App;
