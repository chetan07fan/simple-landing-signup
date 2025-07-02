import React, { useState } from "react";
import "./DynamicForm.css";

const fieldTemplates = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "message", label: "Message", type: "textarea" },
];

const DynamicForm = ({ closeForm }) => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Submitted Data:", formData);
    closeForm();
  };

  return (
    <div className="overlay">
      <div className="form-container">
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
            <div key={field.id} className="form-group">
              <label>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.id}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label}`}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.id}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label}`}
                />
              )}
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
