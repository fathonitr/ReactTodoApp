import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListContext } from "../Context/listContext";
//This will get list from listContext
const Item = ({ task, id, done, itemTest }) => {
  const [list, setList] = useContext(ListContext);
  const [mark, setMark] = useState(isDone);
  const [test, setTest] = useState(done);

  const isDone=()=>{
    if(done){
     return { textDecorationLine: "none", color: "black" }
    }else{
      return{ textDecorationLine: "line-through", color: "grey" }
    }
  }

  const deleteTask = (e) => {
    let idDelete = id;
    setList(list.filter((item) => item.id !== idDelete));
  };
  
  const markTask = () => {
    if (!done) {
    //  setMark({ textDecorationLine: "line-through", color: "grey" });
    //  deleteTask()
      setList((prevTask) => [...prevTask, { task: task, id: id, done: true }]);
      
     // setTest(true);
    } else {
     // setMark({ textDecorationLine: "none", color: "black" });
    //  deleteTask()
      setList((prevTask) => [...prevTask, { task: task, id: id, done: false }]);
      
     // setTest(false);
    }
  };
  return (
    <View style={styles.test}>
      <TouchableOpacity style={styles.button} onPress={markTask}>
        <Text>Mark Here</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={mark}>
          {task} {console.log(itemTest.done+" "+id)}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} index={id} onPress={deleteTask}>
        <Text>Delete Here</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  test: {
    flexDirection: "row",
    margin: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
  },
  textContainer: {
    flex: 6,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
  },
});
