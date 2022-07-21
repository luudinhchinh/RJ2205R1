import React from 'react'

function Checkbox({ label, name, value, onChange, onBlur, error, type }) {
  return (
    <div>
      <input id={name} name={name} type={"checkbox"} onChange={onChange} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Checkbox