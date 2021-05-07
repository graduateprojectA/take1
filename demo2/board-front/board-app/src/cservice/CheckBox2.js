import React from 'react'

export const CheckBox2= props => {
    return (
      <li>
       <input key={props.class_no} onClick={props.handleChange} type="checkbox" value={props.class_no} /> {props.class_name}
      </li>
    )
}

export default CheckBox2