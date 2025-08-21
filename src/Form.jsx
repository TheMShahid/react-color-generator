import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, SetColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  const handleChange = (e) => {
    SetColor(e.target.value);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          className="form-color"
          value={color}
          onChange={(e) => SetColor(e.target.value)}
          style={{ cursor: "pointer" }}
        />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />
        <button
          className="btn"
          type="submit"
          style={{
            background: color,
          }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
