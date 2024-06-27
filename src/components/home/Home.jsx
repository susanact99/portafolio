import React from 'react'
import "./home.css"
import Avatar from '../../assets/Avatar.jpg'
import { HeaderSocials } from './HeaderSocials'
import { ScrollDown } from './ScrollDown'


export function Home(props) {


  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Avatar} alt="" className='home_img' />
        <h1 className="home_name">Susana Calzadilla</h1>
        <span className="home_education">I'm a Front-End Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire me</a>

        <ScrollDown />
      </div>

    </section>
  )
}
