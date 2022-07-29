import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate()
  const DonationHistory = () => {
    navigate('/itemsbox')
  }
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className={`${styles.modal} modal-content`}>
              <div className={`${styles.modalHeader} modal-header`}>
                <div className={styles.header}>
                  <img className={styles.img} src="./images/Logo.png" alt="" />
                  <div className={styles.desc}>
                    <h className={styles.name}>Avak</h>
                    <p>avakinternational@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className={`${styles.container} container`}>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-gift"></i></div>
                        <div className={`${styles.col1} col-10`}>Your current Box</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i class="fa-solid fa-heart"></i></div>
                        <div className={`${styles.col1} col-10`} onClick={DonationHistory}>Donation History</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-user"></i></div>
                        <div className={`${styles.col1} col-10`}>Profile Settings</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-circle-question"></i></div>
                        <div className={`${styles.col1} col-10`}>Help</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-12">
                      <div className="row">
                        <div className={`${styles.col} col-2`}><i className="fa-solid fa-circle-info"></i></div>
                        <div className={`${styles.col1} col-10`}>About Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
