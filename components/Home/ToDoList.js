import { useContext } from "react";
import StoreContext from "../Store/store-context";
import ToDo from "./ToDo";

import classes from "./ToDoList.module.css";

const ToDoList = () => {
  const { week, currentday } = useContext(StoreContext);

  return (
    <div className={classes.container}>
      {week[currentday].filter((e) => !e.achieved).length === 0 && (
        <h4 className={classes.notfound}>No tasks found</h4>
      )}
      <div className={classes.todoContainer}>
        {week[currentday].length > 0 &&
          week[currentday].filter((e) => !e.achieved).length !== 0 &&
          week[currentday].map((task) => {
            if (!task.achieved) {
              return (
                <ToDo
                  id={task.id}
                  key={task.id}
                  task={task.task}
                  information={task.information}
                  color={task.color}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default ToDoList;
