import React from "react";
import styles from "./Items.module.css";

const Items = () => {
  return (
    <>
      <div className="container">
        <div className=" text-center mt-5 mb-3 fs-1 fw-bold">Your Items</div>
        <div className={`${styles.box} mt-3`}>
          <div className={`${styles.card} card d-flex flex-row`}>
            <div>
            <img style={{height: '100%', padding: '12px', borderRadius: '24px'}} src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <div className="fs-3">Your title</div>
              <p>Your description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
