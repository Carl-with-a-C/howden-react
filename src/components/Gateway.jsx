import React from "react";

const Gateway = () => {
  return (
    <div>
      <h4>2.0 Gateway grid with optional tabs</h4>
      <div class="grid-y align-center gateway-container t_padding_5 b_padding_5 r_margin_2 l_margin_2">
        <div class="cell padding_05">
          <h1>Hi Ahmed, explore your quick links</h1>
        </div>
        <div class="cell b_padding_05">
          <p>Use the search to find learning or explore the gateways below</p>
        </div>
        <div class="cell b_padding_2">
          <button class="tab-btn">Me</button>
          <button class="tab-btn">My team</button>
          <button class="tab-btn">Reporting and compliance</button>
        </div>
        <div class="grid-x align-left box-container">
          <div class=" medium-6 large-4 middle cell boxes">
            <div class="box-1">
              <div class="content align-center b_padding_3">
                <h3 class="t_padding_5">My induction</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
                <button class="exp-btn exp-red">Explore {">"}</button>
              </div>
            </div>
          </div>
          <div class=" medium-6 large-4 middle cell boxes">
            <div class="box-2">
              <div class="content align-center">
                <h3 class="t_padding_5">My learner home</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
                <button class="exp-btn exp-red">Explore {">"}</button>
              </div>
            </div>
          </div>
          <div class=" medium-6 large-4 middle cell boxes">
            <div class="box-3">
              <div class="content align-center">
                <h3 class="t_padding_5">FLT training</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
                <button class="exp-btn exp-red">Explore {">"}</button>
              </div>
            </div>
          </div>
          <div class=" medium-6 large-6 middle cell boxes">
            <div class="box-4">
              <div class="content align-center">
                <h3 class="t_padding_5">My conversations</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
                <button class="exp-btn exp-red">Explore {">"}</button>
              </div>
            </div>
          </div>
          <div class=" medium-12 large-6 middle cell boxes">
            <div class="box-5">
              <div class="content align-center">
                <h3 class="t_padding_5">'How do I..?' guides</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
                <button class="exp-btn exp-red">Explore {">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
