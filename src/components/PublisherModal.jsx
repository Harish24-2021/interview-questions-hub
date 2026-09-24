import React from "react";
import "../styles/PublisherModal.css";

const PublisherModal = ({ onSave, onClose }) => {
  return (
    <div className="publisherModal">
<dialog open  >
    <input id={"question-container"}  placeholder="Question" className="question-input"/>
    <input id={"answer-container"}  placeholder="Answer" className="answer-input"/>
      <button onClick={onSave}>Save</button>    <button onClick={onClose}>Close</button>

</dialog>
    
    </div>

  );
};

export default PublisherModal;