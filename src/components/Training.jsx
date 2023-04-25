import React from "react";

const Training = () => {
  return (
    <div>
      <h4>4. Training record</h4>
      <div class="grid-y align-center b_padding_5  t_padding_3  training-main ">
        <div class="cell align-center b_padding_1 t_padding_3 training-img-container">
          <img
            class="training-img"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="a woman smiling"
          />
        </div>
        <div class="cell align-center training-title-container ">
          <h2 class="training-title">My training record</h2>
        </div>

        <div class="cell align-center training-box-container b_padding_2 t_padding_1">
          <div class="grid-x  training-boxes">
            <div class="small-4 cell training-box">
              <p class="sub-heading">OVERDUE</p>
              <h1 class="oversized">6</h1>
            </div>
            <div class="small-4 cell training-box">
              <p class="sub-heading">DUE SOON</p>
              <h1 class="oversized">4</h1>
            </div>
            <div class="small-4 cell training-box">
              <p class="sub-heading">NO DUE DATE</p>
              <h1 class="oversized">8</h1>
            </div>
          </div>
        </div>
        <div class="cell training-btn-container">
          <button class="exp-btn exp-red">
            View full training record {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
