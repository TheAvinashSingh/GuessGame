import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of Rounds: {props.totalRounds} </Text>
      <Text>Number Was: {props.userNumber}</Text>
      <Button title='Restart' onPress={props.onRestart()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
