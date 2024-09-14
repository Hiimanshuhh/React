import React from "react";
import Intro from "./components/Intro";
import Product from "./components/Product";
import Ternery from "./components/Ternery";
import Events from "./components/Events";
import Counter from "./components/Counter";
import ShowProduct from "./components/ShowProduct";
import Filter from "./components/Filter";
import Buttons from "./components/buttons";
import Ustate from "./components/Ustate";
import Fetching from "./components/Fetching";
import FormHandling from "./components/FormHandling";
import MultipeForm from "./components/MultipleForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      {/* <div>
        <Product
          Title={"Samsung"}
          Name={"Faadu"}
          Model={"22.1.0.5"}
          Space={"60GB"}
          Color={"Black"}
        />
        <Product
          Title={"iPhone"}
          Name={"12"}
          Model={"22.1.55"}
          Space={"128GB"}
          Color={"Blue"}
        />
      </div>
      <div>
        <Ternery name={"Homelander"} age={18} />
      </div>
      <div>
        <Events />
        <Counter />
      </div> */}
      {/* <ShowProduct/> */}
      {/* <Filter/> */}
      {/* <Buttons/> */}
      {/* <Ustate/> */}
      {/* <Fetching/> */}
      {/* <FormHandling/> */}
      {/* < MultipeForm/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
