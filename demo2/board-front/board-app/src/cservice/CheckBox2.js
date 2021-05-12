import React from 'react'
export const CheckBox2= props => {
    return (
      <li className="Check1">
       <input key={props.class_no} onClick={props.handleChange} type="checkbox" value={props.class_no}/> 
       {props.class_name} / {props.professor_name} / {props.class_division}분반
      </li>
    )
}
export default CheckBox2