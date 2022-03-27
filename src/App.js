import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
      <Product />
      <Section3></Section3>
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
