import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//This will get list from listContext
const Item = ({ done, task }) => {
  const markStyle = (d) => ({ textDecorationLine: d ? "line-through" : "none", color: d ? "grey" : "black" });
 
  return (
    <View style={styles.textContainer}>
      <Text style={markStyle(done)}>{task}</Text>
    </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  textContainer: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    margin: 5
  },
});
