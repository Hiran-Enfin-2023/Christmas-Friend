import React from "react";
import Santa from "../../assets/w1.png";
import icesanta from "../../assets/head_s.png";
import "./Wish.css"
function Wish() {
  return (

      <div id="wish" className="about-box" style={{ paddingBottom: "0px" }}>
        <div className="about-a1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>Best Wishes</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-6 col-md-6 col-sm-12 text_align_center">
                    <div className="full">
                      <img className="img-responsive" src={Santa} alt="#" />
                    </div>
                  </div>

                  <div id="enfin-wish-main" className="col-lg-6 col-md-6 col-sm-12">
                    <h2 className="enfin-wish">
                      <img style={{ width: "60px" }} src={icesanta} alt="#" />{" "}
                      Wishes from Enfin
                    </h2>
                    <p
                    >
                      Hurray! It is that time of the year to take things slow.
                      Slow down, breath in nature's sweet fragrance; enjoy the
                      chirping of the birds and the serene moments with family
                      and friends. May the magical feeling of Christmas surround
                      you all year round. Merry Christmas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Wish;
