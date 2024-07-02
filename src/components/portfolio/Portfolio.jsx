import React from 'react'
import "./portfolio.css"
import Menu from './Menu.jsx'

export function Portfolio(props) {


  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">Recent work</h2>


      <div className="work_container grid">
        {
          Menu.map(({ id, image, title }) => {
            return (
              <div className="work_card" key={id}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />

                </div>

                <div className="work_mask">
                  <div className="work_title-div">
                    <h3 className="work_title">{title}</h3>
                  </div>
                  <div className="link_laptop">
                    <a href="#" className="work_button">
                      <i className="bi bi-laptop"   title='Live Page'></i>
                    </a>
                  </div>

                  <div className="link_github">
                    <a href="#" className="work_button">
                      <i className="bi bi-github"  title='Code'></i>
                    </a>
                  </div>

                </div>

              </div>
            )
          })
        }

      </div>
    </section>
  )
}
