import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fotter from "./Component/Footer/Fotter";
import Header from "./Component/Header/Header";
import Main from "./Component/section1/Main";
import Section2 from "./Component/Section2/Section2";
import Section3 from "./Component/Section3/Section3";
import Section5 from "./Component/Section5/Section5";
import Section4 from "./Component/Sextion4/Section4";


function App() {
  return (
    <>
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      <Fotter />
      </div>
    </>
  );
}

export default App;
