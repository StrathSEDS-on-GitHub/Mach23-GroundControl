import Modal from 'react-modal'
import React from 'react'

Modal.setAppElement('#modalcontainer');

const centerelement = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function CreateModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
      <div>
          <button onClick={openModal}>Open</button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={centerelement}
          contentLabel="Alert"
          >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>subtitle</h2>
          <button onClick={closeModal}>Continue</button>
          <div>This is an alert</div>
          <form>
              <input />
              <button>Context button</button>
          </form>
          </Modal>
      </div>
  );
}

export default CreateModal;