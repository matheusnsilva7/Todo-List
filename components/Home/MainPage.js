import { useContext } from "react";
import ToDoList from "./ToDoList";
import Arrow from "./Arrow";
import StoreContext from "../Store/store-context";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const { currentday, setDay } = useContext(StoreContext);

  const style =
    window.innerWidth < 700
      ? {
          transform: `translateX(-${currentday * 32}rem)`,
        }
      : {
          transform: `translateX(0rem)`,
        };

  let day = new Date();
  let selectedDay = new Date();
  selectedDay.setDate(day.getDate() + (currentday - day.getDay()));
  selectedDay = selectedDay.toString().split(" ");

  return (
    <div className={classes.ContainerAll}>
      <div className={classes.weekContainer}>
        <h2>Week</h2>
        <div className={classes.container}>
          {currentday !== 0 ? <Arrow /> : <div style={{ width: "48px" }}></div>}
          <div className={classes.weekdays} style={style}>
            <h3
              className={`${classes.day} ${
                currentday === 0 ? classes.active : " "
              }`}
              onClick={() => setDay(0)}
            >
              Sunday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 1 ? classes.active : " "
              }`}
              onClick={() => setDay(1)}
            >
              Monday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 2 ? classes.active : " "
              }`}
              onClick={() => setDay(2)}
            >
              Tuesday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 3 ? classes.active : " "
              }`}
              onClick={() => setDay(3)}
            >
              Wednesday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 4 ? classes.active : " "
              }`}
              onClick={() => setDay(4)}
            >
              Thursday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 5 ? classes.active : " "
              }`}
              onClick={() => setDay(5)}
            >
              Friday
            </h3>
            <h3
              className={`${classes.day} ${
                currentday === 6 ? classes.active : " "
              }`}
              onClick={() => setDay(6)}
            >
              Saturday
            </h3>
          </div>
          {currentday !== 6 ? (
            <Arrow right="true" />
          ) : (
            <div style={{ width: "48px" }}></div>
          )}
        </div>
      </div>
      <ToDoList />
      <div className={classes.dateContainer}>
        <h4>{`${selectedDay[1]} ${selectedDay[2]}`}</h4>
      </div>
    </div>
  );
};

export default MainPage;
