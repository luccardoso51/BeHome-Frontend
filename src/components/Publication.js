import React from 'react'

import './Publication.css'

export default function Publication( { children } ) {
  return (
    <div className="publication-container">
      { children }
    </div>
  )
}