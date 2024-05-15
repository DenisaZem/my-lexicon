const Modal = ({ notifContent }) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-text">{notifContent}</div>
      </div>
    </div>
  );
};

export default Modal;
