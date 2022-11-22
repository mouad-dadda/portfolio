import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => { 

  const[ToggleQualification,setToggleQualification]=useState(1)
  const toggleQlf=(index)=>{
    setToggleQualification(index)
  }
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={
            ToggleQualification===1?"qualification_button qualification_active button_flex":"qualification_button  button_flex"
          } onClick={()=>{toggleQlf(1)}} >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Eduction
          </div>
          <div className={
            ToggleQualification===2?"qualification_button qualification_active button_flex":"qualification_button  button_flex"
          } onClick={()=>{toggleQlf(2)}} >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div className={ToggleQualification===1?"qualification_content qualification_content_active ":"qualification_content "}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Developement Digital </h3>
                <span className="qualification_subtitle">Technician Specializing In Development Digital AT OFPPT.</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2023 
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div> */}
          </div>
          <div className={ToggleQualification===2?"qualification_content qualification_content_active ":"qualification_content "}>
            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
              
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Web Design </h3>
                <span className="qualification_subtitle">spain-institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
