import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import TaskManager from "./components/TaskManager"

import { tasks } from "./tasks"

const App = () => {
  return (
    <View style={styles.container}>
      <TaskManager />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
    color: "red"
  }
});

export default App;