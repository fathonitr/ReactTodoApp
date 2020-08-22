import React, { useState, useContext } from "react";
import {StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styleContent";
import { ListContext } from "../Context/listContext";
import Item from "./item";
//This will get list from listContext, and call item while passing values with props
const Content = () => {
  const [list, setList] = useContext(ListContext);
  

  const markTask = (id, done) => {
    //future me! This don't work setList((prevTask)=>[prevTask.map(el=>el.id===id?{...el, done:!done}:el)])}
    const nextListState=list.map(a=>a.id ===id?{...a, done:!done}:a)
    setList(nextListState)
    console.log(nextListState)
  }; 

    const onDelete = (id) => {
    const newLIst = list.filter(l => l.id !== id);
    setList(newLIst)
    console.log(list)
  }

  return (
    <View style={styles.content}>
      <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => console.log(list)}>
        <Text>Check list</Text>
      </TouchableOpacity>
      {list.map((list) => {
        //  console.log("run");
        return <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => markTask(list.id, list.done)}>
            <Text>Mark Here</Text>
          </TouchableOpacity>
          <Item done={list.done} task={list.task}/>
          <TouchableOpacity style={styles.button} onPress={() => onDelete(list.id)}>
            <Text>Delete Here</Text>
          </TouchableOpacity>


        </View>;
      })}
    </View>
  );
};

export default Content;
