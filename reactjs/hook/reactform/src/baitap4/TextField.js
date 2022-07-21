import React from 'react'

function TextField({ label, name, value, onChange, onBlur, error, type }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label> <br />
      <input id={name} name={name} type={type || "text"} onChange={onChange} value={value} />
    </div>
  )
}

export default TextField