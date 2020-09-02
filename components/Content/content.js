import React, { useState, useContext } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styleContent";
import { ListContext } from "../Context/listContext";
import Item from "./item";
import checkmark from "../../assets/checkmark.svg";
import removemark from "../../assets/remove.svg";
//This will get list from listContext, and call item while passing values with props
const Content = () => {
  const [list, setList] = useContext(ListContext);
  const markTask = (id, done) => {
    //future me! This don't work setList((prevTask)=>[prevTask.map(el=>el.id===id?{...el, done:!done}:el)])}
    const nextListState = list.map((a) => (a.id === id ? { ...a, done: !done } : a));
    setList(nextListState);
    console.log(nextListState);
  };

  const onDelete = (id) => {
    const newLIst = list.filter((l) => l.id !== id);
    setList(newLIst);
    console.log(list);
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity style={{}} onPress={() => console.log(list)}>
        <Text>Check list</Text>
      </TouchableOpacity>
      {list.map((list) => {
        //  console.log("run");
        return (
          <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => markTask(list.id, list.done)}>
              <Image source={checkmark} style={styles.button}></Image>
            </TouchableOpacity>
            <Item done={list.done} task={list.task} />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => onDelete(list.id)}>
              <Image source={removemark} style={styles.button}/>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Content;
