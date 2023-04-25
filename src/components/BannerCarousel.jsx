import React from "react";

const BannerCarousel = () => {
  return (
    <div>
      <h4>3.1 Banner with optional carousel</h4>
      <div class="banner-main t_padding_5 b_padding_5">
        <div class="grid-x align-middle padding_1 banner-container">
          <div class="banner-title medium-6 cell">
            <div>
              <h1>Discover the latest initiatives from Howdens</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div class="banner-carousel medium-6 cell">
            <div class="grid-y ">
              <div class="swiper">
                {/* Additional required wrapper */}
                <div class="swiper-wrapper">
                  {/* Slides */}
                  <div class="swiper-slide ">
                    <div class="banner-img">
                      <img
                        src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="worker"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  ...
                </div>
                {/* If we need pagination */}
                <div class="swiper-pagination"></div>

                {/* If we need navigation buttons */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
