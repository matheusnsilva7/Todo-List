import { useContext } from "react";
import ToDoList from "./ToDoList";
import Arrow from "./Arrow";
import StoreContext from "../Store/store-context";

import classes from "./MainPage.module.css";

const weekdays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const MainPage = () => {
  const { currentday } = useContext(StoreContext);

  return (
    <>
      <div className={classes.container}>
        {currentday !== 0 ? <Arrow /> : <div style={{ width: "48px" }}></div>}
        <h3 className={classes.date}>{weekdays[currentday]}</h3>
        {currentday !== 6 ? (
          <Arrow right="true" />
        ) : (
          <div style={{ width: "48px" }}></div>
        )}
      </div>
      <hr />
      <ToDoList />
    </>
  );
};

export default MainPage;
