import { useContext, useState } from "react";
import StoreContext from "../Store/store-context";
import ToDo from "./ToDo";
import BtnForm from "../Form/BtnForm";
import classes from "./ToDoList.module.css";
import Card from "../UI/Card";

const ToDoList = () => {
  const { week, currentday } = useContext(StoreContext);
  const information = {
    len: week[currentday].length,
    completed: week[currentday].filter((e) => e.achieved === "Achieved").length,
    progress: week[currentday].filter((e) => e.achieved === "in Progress")
      .length,
    not: week[currentday].filter((e) => e.achieved === "Not achieved").length,
  };

  const style = {
    completed: (information.completed / information.len) * 100 || 0,
    progress: (information.progress / information.len) * 100 || 0,
    not: (information.not / information.len) * 100 || 0,
  };

  return (
    <div className={classes.TodolistContainer}>
      <Card>
        <div className={classes.container}>
          <BtnForm />
          {week[currentday].length === 0 && (
            <h4 className={classes.notfound}>No tasks found</h4>
          )}
          <div className={classes.todoContainer}>
            {week[currentday].length > 0 &&
              week[currentday].map((task) => {
                return (
                  <ToDo
                    id={task.id}
                    key={task.id}
                    task={task.task}
                    information={task.information}
                    color={task.color}
                    Achieved={task.achieved}
                  />
                );
              })}
          </div>
        </div>
      </Card>
      <div className={classes.informationContainer}>
        <div>
          <h4>Tasks</h4>
          <span>{information.len}</span>
        </div>
        <div>
          <h4>Completed</h4>
          <span>{information.completed}</span>
        </div>
        <div>
          <h4>In Progress</h4>
          <span>{information.progress}</span>
        </div>
        <div>
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
          <div className={classes.completed}></div>
          <h4>Completed</h4>
          <span>{`${style.completed.toFixed(0)}%`}</span>
          <div className={classes.progress}></div>
          <h4>In Progress</h4>
          <span>{`${style.progress.toFixed(0)}%`}</span>
          <div className={classes.not}></div>
          <h4>Not Done</h4>
          <span>{`${style.not.toFixed(0)}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
