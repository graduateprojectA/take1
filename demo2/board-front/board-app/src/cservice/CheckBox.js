import React from 'react'
export const CheckBox = props => {
    return (
      <li className="CheckCheck">
       <input key={props.user_course_no} onClick={props.handleCheckChieldElement} type="checkbox" value={props.user_course_no} /> 
       {props.course_name}
      </li>
    )
}
export default CheckBox