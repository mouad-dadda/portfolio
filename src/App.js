import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Work/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
