import React from "react";
import Intro from "./components/Intro";
import Product from "./components/Product";
import Ternery from "./Ternery";
const App = () => {
  return (
    <>
      <div>
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
        <Ternery name={"Himanshu Joshi"} age={18} />
      </div>
    </>
  );
};

export default App;
