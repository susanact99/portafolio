import React from 'react'

export function ScrollDown(props) {


  return (
    <div className="scroll_down">
      <a href="#about" className="mouse_wrapper">
        <span className="home_scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  )
}
