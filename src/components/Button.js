import React from 'react'

import './Button.css'

export default function Button ({ children, background, color }) {
  return (
    <button style={{background:background, color:color}} > {children} </button>
  )
}