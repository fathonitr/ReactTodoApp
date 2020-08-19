import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListContext } from "../Context/listContext";
//This will get list from listContext
const Item = ({ task, id, done, itemTest }) => {
  const [list, setList] = useContext(ListContext);
  const [mark, setMark] = useState("");
  const [test, setTest] = useState(done);

  useEffect(()=>{
    if(done){
      setMark({textDecorationLine: "line-through", color: "grey"})  
      }else{
        setMark({ textDecorationLine: "none", color: "black" })
      }
  },[])
  
  const deleteTask = (e) => {
    let idDelete = id;
    setList(list.filter((item) => item.id !== idDelete));
  };
  //Test using loop
  /* const testLoop=()=>{
    setList((prevTask)=>[prevTask.map(el=>el.id===id?{...el, done:!done}:el)])} */
  
  const markTask = () => {
    if (!done) {
    //  setMark({ textDecorationLine: "line-through", color: "grey" });
    //  deleteTask()
      setList((prevTask) => [...prevTask, { task: task, id: id, done: true }]);
     // setTest(true);
    } else {
     // setMark({ textDecorationLine: "none", color: "black" });
     // deleteTask()
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
          {task} {console.log(itemTest.done+" "+{mark})}
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
