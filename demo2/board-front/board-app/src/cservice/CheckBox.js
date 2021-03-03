import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.class_no} /> {props.course_id} {props.course_name}
      </li>
    )
}

export default CheckBox