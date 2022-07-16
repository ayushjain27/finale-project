import React, { useState, useEffect } from "react";
import styles from "./Images.module.css";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <div className="container my-3">
        <div className={`${styles.row} row`}>
          <div className={`${styles.col1} col-md-6`}>
            {!imageUrl && !selectedImage && (
              <div className={`${styles.box} my-5`}>
                <img
                  className={styles.images}
                  src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                />
              </div>
            )}
            {imageUrl && selectedImage && (
              <div className={`${styles.box} my-5`}>
                <img
                  className={styles.images}
                  src={imageUrl}
                  alt={selectedImage.name}
                />
              </div>
            )}
            <input
              accept="image/*"
              type="file"
              id="select-image"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
              class="btn-check"
            />
            <label class="btn btn-success" htmlFor="select-image">
              UPLOAD FROM GALLERY
            </label>{" "}
          </div>
          <div className={`${styles.col2} col-md-6`}>Aysuh</div>
        </div>
      </div>
    </>
  );
};

export default Images;
