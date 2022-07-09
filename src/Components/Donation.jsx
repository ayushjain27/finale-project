import React from "react";

const Donation = () => {
  const DonateContainer = {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px auto",
  };

  const sentence = {
    wordSpacing: "2px",
    fontSize: "20px",
    textAlign: "center",
  };

  const DonateBoxContainer = {
    backgroundColor: "lightyellow",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
  };

  return (
    <>
      <div style={DonateContainer} className="container-fluid">
        <div style={sentence}>
          YOU CAN DONATE OLD ITEMS IN THESE THREE CATEGORIES
        </div>
      </div>
      <div style={DonateBoxContainer} container-fluid>
        <div style={{ height: "200px" }} class="row">
          <div style={{ padding: "18px" }} class="col-6 col-md-3">
              <img
                style={{ height: "80%", width: "80%" }}
                src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                alt=""
              />
          </div>
          <div style={{ padding: "18px" }} class="col-6 col-md-3">
              <img
                style={{ height: "80%", width: "80%" }}
                src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                alt=""
              />
          </div>
          <div class="col-6 col-md-3">One of three columns</div>
          <div class="col-6 col-md-3">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default Donation;
