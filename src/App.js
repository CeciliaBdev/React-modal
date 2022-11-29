import Modal from './lib/Modal.js'
import './lib/modal.css'
import { useState } from 'react'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const message = 'Contenu de la modale'

  return (
    <div>
      <h1>Open the modal</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} content={message} />}
    </div>
  )
}

export default App
