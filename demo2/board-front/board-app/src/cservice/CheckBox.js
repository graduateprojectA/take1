import React from 'react'

export const CheckBox = props => {
    return (
      <li className="Check1">
       <input key={props.user_course_no} onClick={props.handleCheckChieldElement} type="checkbox" defaultChecked={!props.course_done?0:1}
       value={props.user_course_no}/>{props.course_name} 
      </li>
    )
}
export default CheckBox