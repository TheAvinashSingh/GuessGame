import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height:2},
    shadowRadius: 5,
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  }
});

export default Card;