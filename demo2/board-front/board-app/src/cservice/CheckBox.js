import React from 'react'
export const CheckBox = props => {
  return (
    <li>
      <input key={props.course_no} onClick={props.handleCheckChieldElement} type="checkbox" value={props.course_name} /> {props.course_id} {props.course_name}
    </li>
    )
}


export default CheckBox