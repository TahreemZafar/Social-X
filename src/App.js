import "./App.css";
// import Navbar from "./Components/navbar/navbar";
// import Header from "./Components/header/Header";
// import Download from "./Components/Download/download";
// import Footer from "./Components/footer/footer";
// import Faq from "./Components/faq/faq";
// import Feature from "./Components/feature/Feature";
// import Subscribe from "./Components/Subscribe/subscribe";
//import UI from "./Components/UI/button/Button";

import {
  Navbar,
  Header,
  Download,
  Faq,
  Feature,
  Footer,
  Subscribe,
} from "./Components";
function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Feature />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />

      {/* <UI/> */}
    </main>
  );
}
export default App;
