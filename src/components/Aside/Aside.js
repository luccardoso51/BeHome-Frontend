import React from 'react'

import './Aside.css'

export default function Aside({ children }){
  return (
    <div className="aside-container">
      {children}
    </div>
  )
}