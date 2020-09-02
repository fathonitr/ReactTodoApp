import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from "react-native";
import Reset from "../../assets/reset.svg";
import imgBackground from "../../assets/header1.jpg"
import styles from "./styleHeader"


const Header = () => {
  const date=new Date().toDateString()
  console.log(date)
  return (
    <View style={styles.headera}>
      <ImageBackground source={imgBackground} style={styles.backgroundImg}>
        <View style={styles.overlay}>
          <View style={styles.test1} >
          <Text style={styles.font}>{date}</Text>
          </View>
          <View style={styles.test2}>
            <TouchableHighlight style={{ backgroundColor: "blue", }}>
              <Text style={{ fontSize: 25 }}>reloadbtn</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>

    </View>
  );
}
export default Header;
