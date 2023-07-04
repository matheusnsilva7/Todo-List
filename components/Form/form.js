import { useContext } from "react";
import StoreContext from "../Store/store-context";
import classes from "./Form.module.css";

const Form = (props) => {
  const dataCtx = useContext(StoreContext);
  const submitForm = (e) => {
    e.preventDefault();
    const data = [
      ...new FormData(e.target),
      ["id", Math.random() * 100],
      ["achieved", "in Progress"],
    ];
    dataCtx.addTodo(Object.fromEntries(data));
    props.form(false);
  };
  const form = () => {
    props.form(false);
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitForm}>
        <label htmlFor="task">Task</label>
        <div className={classes.exit} onClick={form}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
          </svg>
        </div>
        <input type="text" name="task" id="task" required />
        <label htmlFor="information" className={classes.addInformation}>
          Addicional information
        </label>
        <textarea
          name="information"
          rows="5"
          cols="33"
          maxLength="50"
          id="information"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
