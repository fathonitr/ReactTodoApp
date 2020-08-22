import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListContext } from "../Context/listContext";
//This will get list from listContext
const Item = ({done, task}) => {
  //const { done, task } = listTest;
  const [mark, setMark] = useState("");
  console.log(done)
  console.log(mark);
  
   useEffect(() => {
    if (!mark) {
      setMark(markStyle(done));
    }
  }, [done]); 
  const markStyle = (d) => ({ textDecorationLine: d ? "line-through" : "none", color: d ? "grey" : "black" });

   /*   const markTask = (id) => {
    let newDone = !done;
    setMark(markStyle(newDone));
     const newArray=null
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        list[i].done = newDone;
        console.log(list[i])
       //newArray=[]
      }
    }
    console.log(list);
  //  setList(list);
  };  */  

 // const onPressBtn = () => markTask(id);

  return (
      <View style={styles.textContainer}>
        <Text style={mark}>{task}</Text>
      </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  textContainer: {
    flex: 8 ,
    flexDirection:"column",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    margin:5
  },
});
