import React, { useState } from 'react'
import 'animate.css'
import "./sidebar.css"



export function Sidebar(props) {
  const [toggle, setToggle] = useState(false)


  return (
      <aside className='aside'>
        <div className="nav_toggle">
          <i onClick={() => setToggle(!toggle)}
            className={toggle ? "bi bi-x-lg" : "bi bi-list"}>
          </i>
        </div>
        <nav className={toggle
          ? "nav animate__animated animate__fadeIn"
          : "nav animate__animated animate__fadeOut"} >
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link" title="Home">
                  <i className="bi bi-house"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link" title="About me">
                  <i className="bi bi-person"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#tecnologies" className="nav_link" title="Tecnologies">
                  <i className="bi bi-pc-display"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#experience" className="nav_link" title="Experience">
                  <i className="bi bi-mortarboard"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link" title="Recent work">
                  <i className="bi bi-briefcase"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link" title="Contact me">
                  <i className="bi bi-chat"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <p className='copyright'>  2025 <span className='symbol'>©</span></p>
        </div>
      </aside>

  )
}


