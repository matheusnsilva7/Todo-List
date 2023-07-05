import { useContext, useState } from "react";
import StoreContext from "../Store/store-context";

import classes from "./ToDoList.module.css";

const ToDo = ({ day, id, task, information, Achieved = false }) => {
  const [remove, setRemove] = useState(false);
  const { removeTodo, achieved } = useContext(StoreContext);

  const btnRemoveHandler = () => {
    removeTodo(id, day);
  };

  const btnAchivedHandler = () => {
    achieved(id, "Achieved", day);
  };
  const btnNotAchivedHandler = () => {
    achieved(id, "Not achieved", day);
  };
  const btnInProgressHandler = () => {
    achieved(id, "in Progress", day);
  };

  return (
    <div
      onClick={() => remove && setRemove(false)}
      className={`${classes.todo}`}
      key={id}
    >
      <h4 className={classes.title}>{task}</h4>
      {!remove ? (
        <button
          className={`${classes.buttonSettings}`}
          onClick={() => setRemove(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 14C5.45 14 4.97933 13.804 4.588 13.412C4.196 13.0207 4 12.55 4 12C4 11.45 4.196 10.979 4.588 10.587C4.97933 10.1957 5.45 10 6 10C6.55 10 7.02067 10.1957 7.412 10.587C7.804 10.979 8 11.45 8 12C8 12.55 7.804 13.0207 7.412 13.412C7.02067 13.804 6.55 14 6 14ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM18 14C17.45 14 16.979 13.804 16.587 13.412C16.1957 13.0207 16 12.55 16 12C16 11.45 16.1957 10.979 16.587 10.587C16.979 10.1957 17.45 10 18 10C18.55 10 19.021 10.1957 19.413 10.587C19.8043 10.979 20 11.45 20 12C20 12.55 19.8043 13.0207 19.413 13.412C19.021 13.804 18.55 14 18 14Z"
              fill="#A7A8A8"
            />
          </svg>
        </button>
      ) : (
        <button
          className={`${classes.buttonSettings}  ${classes.trash}`}
          onClick={btnRemoveHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="m399-305 82-82 82 82 69-69-82-82 82-82-69-69-82 82-82-82-69 69 82 82-82 82 69 69Zm-91 193q-40.425 0-69.213-28.788Q210-169.575 210-210v-490h-48v-98h220v-56h198v56h220v98h-48v489.566q0 41.159-28.787 69.797Q694.425-112 654-112H308Zm346-588H308v490h346v-490Zm-346 0v490-490Z" />
          </svg>
        </button>
      )}
      {information && <p className={classes.paragraph}>{information}</p>}
      <div className={classes.Achieved}>
        <div
          onClick={btnAchivedHandler}
          className={Achieved === "Achieved" ? classes.active : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M395-285 226-455l50-50 119 118 289-288 50 51-339 339Z" />
          </svg>
          <button>Complete</button>
        </div>
        <div
          onClick={btnInProgressHandler}
          className={Achieved === "in Progress" ? classes.active : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.376 0-149.188-30Q261-156 208.5-208.5T126-330.958q-30-69.959-30-149.5Q96-560 126-630t82.5-122q52.5-52 122.458-82 69.959-30 149.5-30 79.542 0 149.548 30.24 70.007 30.24 121.792 82.08 51.786 51.84 81.994 121.92T864-480q0 79.376-30 149.188Q804-261 752-208.5T629.869-126Q559.738-96 480-96Zm0-384Zm.477 312q129.477 0 220.5-91.5T792-480.477q0-129.477-91.023-220.5T480.477-792Q351-792 259.5-700.977t-91.5 220.5Q168-351 259.5-259.5T480.477-168Z" />
          </svg>
          <button>In progress</button>
        </div>
        <div
          onClick={btnNotAchivedHandler}
          className={Achieved === "Not achieved" ? classes.active : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M823-86 588-321l-91 91-170-170 51-51 119 119 40-40-393-393 51-51 679 679-51 51ZM293-230 123-400l51-51 116 116 54 54-51 51Zm397-193-51-51 147-147 51 51-147 147ZM588-525l-51-51 45-44 51 51-45 44Z" />
          </svg>
          <button>Not done</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
