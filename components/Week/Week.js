import { useContext } from "react";
import StoreContext from "../Store/store-context";

import classes from "./Week.module.css";

const Week = () => {
  const { week } = useContext(StoreContext);
  const arr = Object.values(week).flat();
  const information = {
    len: arr.length,
    completed: arr.filter((e) => e.achieved === "Achieved").length,
    progress: arr.filter((e) => e.achieved === "in Progress").length,
    not: arr.filter((e) => e.achieved === "Not achieved").length,
  };

  const style = {
    completed: (information.completed / information.len) * 100 || 0,
    progress: (information.progress / information.len) * 100 || 0,
    not: (information.not / information.len) * 100 || 0,
  };

  return (
    <div className={classes.container}>
      <h3>Week</h3>
      <div className={classes.informationContainer}>
        <h4>Tasks</h4>
        <span>{information.len}</span>
      </div>
      <div className={classes.informationContainer}>
        <h4>Completed</h4>
        <span>{information.completed}</span>
      </div>
      <div className={classes.informationContainer}>
        <h4>In Progress</h4>
        <span>{information.progress}</span>
      </div>
      <div className={classes.informationContainer}>
        <h4>Not Done</h4>
        <span>{information.not}</span>
      </div>
      <div className={classes.graphic}>
        <div
          className={classes.graphicContainer}
          style={{
            background: `conic-gradient(rgba(255, 0, 0, 0.8) 0% ${
              style.not
            }%, rgba(255, 255, 0, 0.8) ${style.not}% ${
              style.progress + style.not
            }%, rgba(94, 255, 0,.8) ${style.progress}% 100%`,
          }}
        ></div>
        <div className={classes.graphicLabel}>
          <div className={classes.completed}></div>
          <h4>Completed</h4>
          <span>{`${style.completed.toFixed(0)}%`}</span>
        </div>
        <div className={classes.graphicLabel}>
          <div className={classes.progress}></div>
          <h4>In Progress</h4>
          <span>{`${style.progress.toFixed(0)}%`}</span>
        </div>
        <div className={classes.graphicLabel}>
          <div className={classes.not}></div>
          <h4>Not Done</h4>
          <span>{`${style.not.toFixed(0)}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default Week;
