import React from 'react'

export function Card({ icon, year, title, description }) {


  return (
    <div className="timeline_item">
      <i className={icon}></i>
      <span className="timeline_date">{year}</span>
      <h3 className="timeline_title">{title}</h3>
      <p className="timeline_text">{description}</p>
    </div>
  );
};
