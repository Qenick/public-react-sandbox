import React from "react";
import './App.css';
import Clocks from "./views/Clocks/Clocks";
import PassingThoughts from "./views/PassingThoughts/PassingThoughts";

function App()  {
    return (
      <div>
        <PassingThoughts />
        <Clocks/>
      </div>
    );
}

export default App;
