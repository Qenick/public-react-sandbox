import React from "react";
import './App.css';
import Clocks from "./views/Clocks/Clocks";
import PassingThoughts from "./views/PassingThoughts/PassingThoughts";
import StatelessComponentsUpdatingTheirParents
  from "./views/StatelessComponentsUpdatingTheirParents/StatelessComponentsUpdatingTheirParents";

function App()  {
    return (
      <div>
        <PassingThoughts />
        <Clocks/>
        <StatelessComponentsUpdatingTheirParents />
      </div>
    );
}

export default App;
