import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onNewRequest()}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d7ccc8',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
