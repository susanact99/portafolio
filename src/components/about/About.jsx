import React from 'react'
import "./about.css"
import Avatar from '../../assets/Avatar.jpg'
import CV from '../../assets/CV.pdf'



export function About(props) {


  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Avatar} alt="" className='home_img' />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Hello, I'm <strong>Susana Calzadilla</strong> . I specialize in designing and building websites.
              My passion lies in creating engaging, user-friendly web experiences that meet the needs of both clients and users.
              With a keen eye for detail and a commitment to quality
            </p>
            <a href={CV} download="CV Susana Calzadilla.pdf" className="btn">Download CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX Design</h3>
                <span className="skills_number ">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Web Development</h3>
                <span className="skills_number ">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Office Assistant</h3>
                <span className="skills_number ">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage office"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
