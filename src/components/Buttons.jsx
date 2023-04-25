import React from "react";
import { Icon } from "react-foundation";

const Buttons = () => {
  return (
    <div className="Buttons">
      <h4>explore BUTTONS</h4>
      <button class="exp-btn exp-red">Explore {">"}</button>
      <button class="exp-btn exp-wht">Explore {">"}</button>
      <button class="exp-btn exp-blue">Explore {">"}</button>

      <h4>tab BUTTON</h4>

      <button class="tab-btn">Tab example</button>

      <h4>search BUTTON</h4>

      <button class="search-btn">@</button>

      <h4>back BUTTON</h4>

      <button class="back-btn">{"<"}</button>

      <h4>play BUTTON</h4>

      <button class="play-btn">{">"}</button>
    </div>
  );
};

export default Buttons;
