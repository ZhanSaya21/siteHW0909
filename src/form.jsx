import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>Форма обратной связи</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ФИО:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Телефон:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Электронный адрес:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Комментарий:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

// export default Modal;

export function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="appForm">
      <button onClick={openModal}>Открыть форму</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
