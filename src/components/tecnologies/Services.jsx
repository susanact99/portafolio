import React from 'react'
import "./tecnologies.css"
import { tecnologies } from './tecnologies'

export function Tecnologies(props) {
  

  return (
    <section className="container section" id='tecnologies'>
      <h2 className="section_title">Tecnologies</h2>

      <div className="tecnologies_container">
        {
          tecnologies.map(({ id, img, name }) => {
            return (
              <div className="tecnologie_card" key={id}>
                <img src={img} alt={name} className='tecnologie_img' title={name} />
              </div>
            )
          })
        }
      </div>

    </section>
  )
}
