import React from 'react'
import './BotonHeaderBlack.css'

export const BotonHeader = () => {
  return (
    <a href="/kitchen">
    <button className="btn-header-black" >
    <span className="btn-header-text">Request your free quoter</span>
    <span className="btn-header-arrow">→</span>

    <span className="btn-header-corner-black btn-header-left"></span>
    <span className="btn-header-corner-black btn-header-right"></span>
    <span className="btn-header-corner-black btn-header-bottom"></span>
    <span className="btn-header-corner-black btn-header-top"></span>
</button>
</a>
  )
}
