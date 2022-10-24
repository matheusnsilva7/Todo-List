import { useContext } from "react";
import { useRouter } from "next/router";
import StoreContext from "../Store/store-context";

import classes from "./Week.module.css";

const Day = ({ title, num }) => {
  const { week, setDay } = useContext(StoreContext);
  const router = useRouter();

  const showDayHandler = () => {
    setDay(+num);
    router.push("/");
  };

  return (
    <div onClick={showDayHandler} className={classes.container}>
      <h4>{title}</h4>
      <hr />
      {week[num].length > 0 &&
      week[num].filter((e) => !e.achieved).length !== 0 ? (
        week[num].map((task) => {
          if (!task.achieved) {
            return (
              <div key={task.id} className={classes[task.color]}>
                <h3 className={classes.title}>{task.task}</h3>{" "}
              </div>
            );
          }
        })
      ) : (
        <h5 className={classes["not-found"]}>no tasks found</h5>
      )}
    </div>
  );
};

export default Day;
