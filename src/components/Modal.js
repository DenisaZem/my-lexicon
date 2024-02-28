// Modal.js
import { useEffect } from "react";

const Modal = ({ notifContent, clearNotif }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      clearNotif();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [clearNotif]);

  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-text">{notifContent}</div>
      </div>
    </div>
  );
};

export default Modal;
