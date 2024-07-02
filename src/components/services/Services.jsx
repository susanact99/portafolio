import React from 'react'
import "./services.css"
import Image1 from '../../../assets/UIUX.png'
import Image2 from '../../../assets/WEB.png'
import Image3 from '../../../assets/OFFICE.png'

export function Services(props) {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Creation of the visual elements of a product, providing meaningful experiences for users."
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Building a website, ensuring it is functional, user-friendly, and visually appealing"
    },
    {
      id: 3,
      image: Image3,
      title: "Office Assistant",
      description:
        "Filing and Organizing, Data Entry, Scheduling,  "
    },
  ]

  return (
    <section className="services container section" id='services'>
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {
          data.map(({ id, image, title, description }) => {
            return (
              <div className="services_card" key={id}>
                <img src={image} alt="" className='services_img' />

                <h3 className="services_title">{title}</h3>
                <p className="services_description">{description}</p>

              </div>
            )
          })
        }
      </div>

    </section>
  )
}
