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
      <Ustate/>

    </>
  );
};

export default App;
