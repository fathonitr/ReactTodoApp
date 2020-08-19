import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Reset from "../../assets/reset.svg";
import imgBackground from "../../assets/header1.jpg"
import styles from "./styleHeader"

const Header=()=> {
  return (
      <View style={styles.headera}>
        <ImageBackground source={imgBackground} style={styles.backgroundImg}>
        <View style={styles.overlay}>
          <Text style={styles.test1}>reloadbtn</Text>
          <Text style={styles.test1} >DAY, 01 JAN 2020</Text>
        </View>
        </ImageBackground>
        
      </View>
  );
}
export default Header;
