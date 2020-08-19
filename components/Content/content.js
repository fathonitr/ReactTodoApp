import React, { useState, useContext } from "react";
import { Text, Image, View } from "react-native";
import styles from "./styleContent";
import { ListContext } from "../Context/listContext";
import Item from './item'
//This will get list from listContext, and call item while passing values with props
const Content = () => {
  const [list, setList] = useContext(ListContext);
  return (
    <View style={styles.content}>
      
      {list.map((list)=>{
          return(
              <Item task={list.task} id={list.id} done={list.done} itemTest={list}></Item>
          )
      })}
    </View>
  );
};


export default Content;
