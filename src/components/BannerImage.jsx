import React from "react";

const BannerImage = () => {
  return (
    <div>
      <h4>3.2 Banner with image</h4>
      <div class="banner-main t_padding_5 b_padding_5">
        <div class="grid-x align-middle banner-container">
          <div class="banner-title medium-6 align-middle cell">
            <div class="grid-y ">
              <div class="cell b_padding_05">
                <h1 class="b_padding_05">
                  Discover the latest initiatives from Howdens
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
          <div class="banner-carousel medium-6 cell">
            <div class="grid-y ">
              <div class="banner-img">
                <img
                  src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=800"
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

export default BannerImage;
