const DetailsModal = ({ message, onClose}) => {
  
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-green-600">
          ✅ Success!
        </h3>

        <p className="py-4">{message}</p>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-success">
            OK
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DetailsModal;