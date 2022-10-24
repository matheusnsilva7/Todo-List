import { useContext, useEffect, useRef } from "react";
import StoreContext from "../Store/store-context";
import ToDo from "../Home/ToDo";

import classes from "./Goals.module.css";

const Goals = () => {
  const { week, currentday, setDay, removeTodo } = useContext(StoreContext);
  const achievementRef = useRef();
  let porcentagem =
    (100 / week[currentday].length) *
    week[currentday].filter((element) => element.achieved).length;
  console.log();
  useEffect(() => {
    setDay(new Date().getDay());
    week[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].map(
      (element) => {
        if (element.achieved) {
          removeTodo(
            element.id,
            new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
          );
        }
      }
    );
  }, []);

  useEffect(() => {
    !porcentagem
      ? (achievementRef.current.style.background = `linear-gradient(to right, #ffd900 0%, white 0%)`)
      : (achievementRef.current.style.background = `linear-gradient(to right, #ffd900 ${porcentagem}%, white ${porcentagem}%)`);
  }, [porcentagem]);

  return (
    <>
      <div
        className={`${classes.container} ${
          porcentagem === 100 && classes.achieved
        }`}
      >
        <div>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
          >
            <path d="M11.667 3.333h16.666v13.625q0 .959-.458 1.73-.458.77-1.25 1.27l-5.917 3.417 1.125 4h5.834l-4.75 3.458 1.833 5.834L20 33.125l-4.792 3.542 1.834-5.834-4.75-3.458h5.875l1.083-4-5.875-3.417q-.792-.5-1.25-1.27-.458-.771-.458-1.73Zm2.791 2.792v10.833q0 .167.125.334.125.166.375.333l3.75 2.125V6.125Zm11.084 0H21.5V19.75l3.542-2.125q.25-.167.375-.333.125-.167.125-.334Zm-5.417 7.208Zm-1.417-.416Zm2.792 0Z" />
          </svg>
        </div>
        <div className={classes.progress} ref={achievementRef}></div>
        <div className={classes.goal}>
          {week[currentday].filter((e) => e.achieved).length}/
          {week[currentday].length}
        </div>
      </div>
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
                achievementPage={true}
              />
            );
          })}
      </div>
    </>
  );
};

export default Goals;
