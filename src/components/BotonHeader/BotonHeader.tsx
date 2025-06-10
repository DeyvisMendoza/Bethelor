import React from 'react'
import './BotonHeader.css'

export const BotonHeader = () => {
  return (
    <button className="btn-header">
    <span className="btn-header-text">Request your free quoter</span>
    <span className="btn-header-arrow">→</span>

    <span className="btn-header-corner btn-header-left"></span>
    <span className="btn-header-corner btn-header-right"></span>
    <span className="btn-header-corner btn-header-bottom"></span>
    <span className="btn-header-corner btn-header-top"></span>
</button>
  )
}
