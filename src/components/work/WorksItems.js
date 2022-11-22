import React from 'react'

const WorksItems = ({id,image , title}) => {
  return (
<div className="work_card" key={id} >
  <img src={image} alt="" className='work_img' />
  <h3 className="work_title"> {title} </h3>
  <a href="#port" className="work_button work_button_hover">
    demo <i className="bx bx-right-arrow-alt work_button_icon"></i>
  </a>
</div>
    )
}

export default WorksItems