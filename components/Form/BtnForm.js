import React, { useState } from "react";
import classes from "./BtnForm.module.css";
import Form from "./form";

const BtnForm = () => {
  const [showForm, setShowForm] = useState(false);

  const form = (boolean) => {
    setShowForm(boolean);
  };
  return (
    <>
      {showForm && <Form form={form} />}
      <button className={classes.btn} onClick={() => setShowForm(!showForm)}>
        <svg
          className={classes.svg}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
        </svg>
      </button>
    </>
  );
};

export default BtnForm;
