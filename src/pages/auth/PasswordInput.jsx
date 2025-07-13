import { useState } from "react";

export default function PasswordInput({ name }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="passwordInputColumn">
      <input
        type={visible ? "text" : "password"}
        name={name}
        required
      />
      <button
        className="togglePassButton"
        onClick={() => setVisible((prev) => !prev)}
        type="button"
      >
        <span className={visible ? "icon-Hide" : "icon-Show"}></span>
      </button>
    </div>
  );
}

