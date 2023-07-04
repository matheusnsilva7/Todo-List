import { useContext } from "react";
import StoreContext from "../Store/store-context";

import classes from "./Arrow.module.css";

const Arrow = ({ right, week }) => {
  const { nextDay, prevDay } = useContext(StoreContext);
  const clickHandler = () => {
    right ? nextDay() : prevDay();
  };
  return (
    <button className={classes.arrow} onClick={clickHandler}>
      {right ? (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z" />
        </svg>
      )}
    </button>
  );
};

export default Arrow;
