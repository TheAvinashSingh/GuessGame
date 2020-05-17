import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
const StartGameScreen = (props) => {
  return (
  <View style={styles.screen}>
    <Text style={styles.title}>Start a new Game</Text>
    <Card style={styles.inputView}>
      <Text>Add a Number</Text>
      <Input style={styles.input} blurOnSubmit autoCapitalize='none' keyboardType='number-pad' maxLength={2} />
      <View style={styles.buttonView}>
      <View style={styles.button}><Button title='Start' color={Colors.primary} onPress={() => {}}/></View>
      <View style={styles.button}><Button title='Reset' color={Colors.secondary} onPress={() => {}} /></View>
      </View>
    </Card>
  </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputView: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100
  },
  input: {
    width: 100,
    textAlign: "center"
  }
});
export default StartGameScreen;
