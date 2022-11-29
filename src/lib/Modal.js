import React from 'react'
import './modal.css'

function Modal({ closeModal, content }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)} className="closeBtn">
          X
        </button>
        <p className="contentModal">{content}</p>
      </div>
    </div>
  )
}
export default Modal
