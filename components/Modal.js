import Modal from 'react-modal'
import React from 'react'

Modal.setAppElement('#example');


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
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
      <div>
          <button onClick={openModal}>Open </button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={centerelement}
          contentLabel="Alert"
          >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>Continue</button>
          <div>This is an alert</div>
          <form>
              <input />
              <button>Ohter button</button>
          </form>
          </Modal>
      </div>
  );
}

export default CreateModal;