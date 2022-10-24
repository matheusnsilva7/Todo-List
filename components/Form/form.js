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
      ["achieved", false],
    ];
    dataCtx.addTodo(Object.fromEntries(data));
    props.form(false);
  };
  const form = () => {
    props.form(false);
  };
  return (
    <>
      <div className={classes.background} onClick={form}></div>
      <form className={classes.form} onSubmit={submitForm}>
        <h3 className={classes.title}>New to do</h3>
        <label>Task</label>
        <input type="text" name="task" required />
        <label>Addicional information</label>
        <textarea name="information" rows="5" cols="33" maxLength="50" />
        <label>Color</label>
        <input type="radio" name="color" id="radiogray" value="gray" />
        <label
          className={classes.gray + " " + classes.label}
          htmlFor="radiogray"
        ></label>
        <span className={classes.span}>Default</span>
        <input type="radio" name="color" id="radiored" value="red" />
        <label
          className={classes.red + " " + classes.label}
          htmlFor="radiored"
        ></label>
        <input type="radio" name="color" id="radioblue" value="blue" />
        <label
          className={`${classes.blue} ${classes.label}`}
          htmlFor="radioblue"
        ></label>
        <input type="radio" name="color" id="radiogreen" value="green" />
        <label
          className={classes.green + " " + classes.label}
          htmlFor="radiogreen"
        ></label>
        <input type="radio" name="color" id="radioredyellow" value="yellow" />
        <label
          className={classes.yellow + " " + classes.label}
          htmlFor="radioredyellow"
        ></label>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
