import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styleInputBar";
import { ListContext } from "../Context/listContext";
import addBtn from "../../assets/add.svg";
import {addToStorage} from '../Storage/accessStorage'
/**
 * type Task in input, store in task with setTask
 * submit to list with setList with enter or submit icon, cleared input field and task
 */
const Input = () => {
  const [list, setList] = useContext(ListContext);
  const [task, setTask] = useState(""); //Only used in this component
  const [countId, setCounter] = useState(0);
  

  const addTask = () => {
    if (task !== "") {
      setList((prevTask) => [...prevTask, {id: countId, task: task, done: false }]); //...prevTask, it copy all the object in lists, and re adding it with the new one
    //  const testObject={name:"john", id:1, done:true}
      //addToStorage(testObject)
      setTask("");
      setCounter(countId + 1);
     // console.log(countId);
    }
  };
  return (
    <View style={styles.containerInput}>
      <TouchableOpacity style={styles.buttonContainer} onPress={addTask}>
        <Image source={addBtn} style={styles.button}></Image>
      </TouchableOpacity>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setTask(text)}
        onSubmitEditing={addTask}
        placeholder="What's the task?"
        value={task}
      />
    </View>
  );
};
export default Input;
