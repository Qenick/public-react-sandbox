import React from "react";
import './App.css';
import Clocks from "./views/Clocks/Clocks";
import PassingThoughts from "./views/PassingThoughts/PassingThoughts";
import StatelessComponentsUpdatingTheirParents
  from "./views/StatelessComponentsUpdatingTheirParents/StatelessComponentsUpdatingTheirParents";

import SiblingUpdate from "./views/SiblingUpdate/SiblingUpdate";
import VideoPlayer from "./views/VideoPlayer/VideoPlayer";
import VideoPlayer2 from "./views/VideoPlayer2/VideoPlayer2";

function App()  {
    return (
      <div>
        <VideoPlayer />
        <VideoPlayer2 />
        <PassingThoughts />
        <Clocks/>
        <StatelessComponentsUpdatingTheirParents />
        <SiblingUpdate />
      </div>
    );
}

export default App;
