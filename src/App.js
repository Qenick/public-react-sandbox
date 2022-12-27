import React from "react";
import './App.css';
import Clocks from "./views/Clocks/Clocks";
import PassingThoughts from "./views/PassingThoughts/PassingThoughts";
import StatelessComponentsUpdatingTheirParents
  from "./views/StatelessComponentsUpdatingTheirParents/StatelessComponentsUpdatingTheirParents";

import SiblingUpdate from "./views/SiblingUpdate/SiblingUpdate";

function App()  {
    return (
      <div>
        <PassingThoughts />
        <Clocks/>
        <StatelessComponentsUpdatingTheirParents />
        <SiblingUpdate />
      </div>
    );
}

export default App;
