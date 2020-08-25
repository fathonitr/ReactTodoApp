import React, { useState, createContext } from "react";
import { View, Text, ImagePropTypes } from "react-native";

export const ListContext = createContext();

export const ListProvider = (props) => {
  const [list, setList] = useState([
         /*  { id: 0, task: "DO this right dude", done:true },
          { id: 1, task: "task2", done:false }      */ ]);
  return <ListContext.Provider value={[list, setList]}>{props.children}</ListContext.Provider>;
};
