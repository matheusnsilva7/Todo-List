import { useContext, useEffect, useRef } from "react";
import StoreContext from "../Store/store-context";
import ToDo from "../Home/ToDo";

import classes from "./Goals.module.css";

const Goals = () => {
  const { week } = useContext(StoreContext);

  return (
    <>
      <div className={classes.container}>
        <h3>Tasks completed</h3>
        <div className={classes.taskContainer}>
          {Object.values(week).flat().length > 0 &&
            Object.values(week)
              .flat()
              .map((task) => {
                if (task.achieved === "Achieved") {
                  return (
                    <ToDo
                      id={task.id}
                      key={task.id}
                      task={task.task}
                      information={task.information}
                      color={task.color}
                      Achieved={task.achieved}
                      achievementPage={true}
                      day={task.week}
                    />
                  );
                }
              })}
        </div>
      </div>
    </>
  );
};

export default Goals;
