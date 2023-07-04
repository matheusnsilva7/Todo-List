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
      {showForm ? (
        <Form form={form} />
      ) : (
        <button className={classes.btn} onClick={() => setShowForm(!showForm)}>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-200v-240H200v-80h240v-240h80v240h240v80H520v240h-80Z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default BtnForm;
