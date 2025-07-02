import React, { useState } from "react";
import "./DynamicForm.css";

const fieldTemplates = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "secondName", label: "Second Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone Number", type: "tel" },
];

const DynamicForm = ({ closeForm }) => {
  const [fields, setFields] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const fieldId = event.dataTransfer.getData("fieldId");

    if (!fields.some((field) => field.id === fieldId)) {
      const newField = fieldTemplates.find((f) => f.id === fieldId);
      if (newField) {
        setFields([...fields, newField]);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, fieldId) => {
    event.dataTransfer.setData("fieldId", fieldId);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    closeForm(); // Close the form after submission
  };

  return (
    <div className="overlay">
      <div className="dynamic-form-container">
        <button className="close-btn" onClick={closeForm}>
          X
        </button>
        <h2>Drag Fields to Create Form</h2>

        <div className="field-options">
          {fieldTemplates.map((field) => (
            <div
              key={field.id}
              className="draggable-field"
              draggable
              onDragStart={(e) => handleDragStart(e, field.id)}
            >
              {field.label}
            </div>
          ))}
        </div>

        <div
          className="form-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h3>Form</h3>
          {fields.length === 0 && <p>Drag a field here to start</p>}

          {fields.map((field) => (
            <div key={field.id} className="form-field">
              <label>{field.label}</label>
              <input type={field.type} placeholder={`Enter ${field.label}`} />
            </div>
          ))}

          {fields.length > 0 && (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
