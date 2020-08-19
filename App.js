import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Input from "./components/InputBar/input";
import { ListProvider } from "./components/Context/listContext";

export default function App() {
  return (
    <ListProvider>
      <View style={styles.container}>
        <Header></Header>
        <Content></Content>
        <Input></Input>
        <StatusBar style="auto" />
      </View> 
    </ListProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    /* 
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink", */
  },
});
