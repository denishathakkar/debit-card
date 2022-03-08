//import libraries
import React from "react";
import { View, StyleSheet, } from "react-native";
import colors from "../constants/colors";


const ProgressBarView = ({color = colors.switchGrey,percentage='0%'}) => {
    // console.log("per", color,percentage)
  return (
    <View style={styles.container}>
        <View  style={styles.innerContentView}>
          <View  style={styles.progressBar}>
            <View
              style={[
                styles.fillColor,
                { backgroundColor: color, width: percentage },
              ]}
            />
          </View>
        </View>
   
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    
  },
  progressBar: {
    width: "80%",
    borderRadius: 10,
    height: 15,
    backgroundColor: colors.switchGrey,
    
  },
  fillColor: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  innerContentView: {
    flexDirection: "row",
    marginTop: 11,
  },
});

export default ProgressBarView;
