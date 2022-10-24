import { useContext, useEffect } from "react";
import StoreContext from "../Store/store-context";
import Day from "./Day";

import classes from "./Week.module.css";

const Week = () => {
  const { setDay } = useContext(StoreContext);
  useEffect(() => {
    setDay(new Date().getDay());
  }, []);
  return (
    <div className={classes.week}>
      <Day title="Sunday" num="0" />
      <Day title="Monday" num="1" />
      <Day title="Tuesday" num="2" />
      <Day title="Wednesday" num="3" />
      <Day title="Thursday" num="4" />
      <Day title="Friday" num="5" />
      <Day title="Saturday" num="6" />
    </div>
  );
};

export default Week;
