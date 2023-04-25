import React from "react";

const MediaTextCTA = () => {
  return (
    <div>
      <h4>5.1 Media/Text/CTA</h4>
      <div class="media-main t_padding_5 b_padding_5">
        <div class="grid-x align-center media-container">
          <div class="media-carousel medium-6 cell">
            <div class="grid-y ">
              <div class="media-img">
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="worker"
                />
              </div>
            </div>
          </div>
          <div class="media-title medium-6 align-middle cell">
            <div class="grid-y grid-padding-y">
              <div class="cell l_padding_4">
                <h2 class="b_padding_05">
                  Left/right media, text & CTA component
                </h2>
                <p class="b_padding_1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>

                <div class="cell media-btns">
                  <button class="exp-btn exp-red">Optional CTA 1 {">"}</button>

                  <button class="tab-btn">Optional CTA 2 {">"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>5.2 Media/Text/CTA flipped</h4>
      <div class="media-main t_padding_5 b_padding_5">
        <div class="grid-x align-center media-container">
          <div class="media-title medium-6 align-middle cell">
            <div class="grid-y grid-padding-y">
              <div class="cell r_padding_4">
                <h2 class="b_padding_05">
                  Left/right media, text & CTA component
                </h2>
                <p class="b_padding_1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>

                <div class="cell media-btns">
                  <button class="exp-btn exp-red">Optional CTA 1 {">"}</button>

                  <button class="tab-btn">Optional CTA 2 {">"}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="media-carousel medium-6 cell">
            <div class="grid-y ">
              <div class="media-img">
                <img
                  src="https://images.pexels.com/photos/8113777/pexels-photo-8113777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="worker"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaTextCTA;
