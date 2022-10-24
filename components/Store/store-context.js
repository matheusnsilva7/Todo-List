import React, { useReducer, useState, useEffect } from "react";

const StoreContext = React.createContext({
  currentday: 0,
  week: [{ 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }],
  addTodo: () => {},
  achieved: () => {},
  removeTodo: () => {},
  nextDay: () => {},
  prevDay: () => {},
  setDay: () => {},
});

const defaultState = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

const weelyReducer = (state, action) => {
  let updatedItems;
  if (action.type === "ADD") {
    updatedItems = state[action.weekday].concat(action.task);
    localStorage.setItem(
      "week",
      JSON.stringify({ ...state, [action.weekday]: updatedItems })
    );
    return { ...state, [action.weekday]: updatedItems };
  }
  if (action.type === "REMOVE") {
    updatedItems = state[action.weekday].filter((task) => {
      return task.id !== action.id;
    });
    localStorage.setItem(
      "week",
      JSON.stringify({ ...state, [action.weekday]: updatedItems })
    );
    return { ...state, [action.weekday]: updatedItems };
  }
  if (action.type === "ACHIEVED") {
    updatedItems = state[action.weekday].filter(
      (task) => task.id === action.id
    );
    let achieved = { ...updatedItems["0"], achieved: true };
    updatedItems = state[action.weekday].map((element) => {
      if (element.id === action.id) {
        return achieved;
      }
      return element;
    });
    localStorage.setItem(
      "week",
      JSON.stringify({ ...state, [action.weekday]: updatedItems })
    );
    return { ...state, [action.weekday]: updatedItems };
  }
  return action.localStorage;
};

export const StoreContextProvider = (props) => {
  const [weeklyState, dispatchAction] = useReducer(weelyReducer, {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  useEffect(() => {
    const week = localStorage.getItem("week");

    if (week) {
      dispatchAction({ localStorage: JSON.parse(week) });
    }
  }, []);

  const addTodoHandler = (element) => {
    dispatchAction({ type: "ADD", task: element, weekday: currentDay });
  };

  const removeToDoHandler = (id, day = false) => {
    dispatchAction({
      type: "REMOVE",
      id: id,
      weekday: typeof day === "number" ? day : currentDay,
    });
  };

  const nextDayHandler = () => {
    setCurrentDay((prev) => prev + 1);
  };
  const prevDayHandler = () => {
    setCurrentDay((prev) => prev - 1);
  };
  const setDayHandler = (e) => {
    setCurrentDay(e);
  };
  const achievedHandler = (id) => {
    dispatchAction({ type: "ACHIEVED", id: id, weekday: currentDay });
  };
  return (
    <StoreContext.Provider
      value={{
        currentday: currentDay,
        week: weeklyState,
        addTodo: addTodoHandler,
        removeTodo: removeToDoHandler,
        achieved: achievedHandler,
        nextDay: nextDayHandler,
        prevDay: prevDayHandler,
        setDay: setDayHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
