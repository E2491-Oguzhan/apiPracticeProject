import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Linking} from 'react-native';

const RestaurantCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.item.name}</Text>
      </View>

      <Text style={styles.typeText}>{props.item.type}</Text>

      <Image style={styles.image} source={{uri: props.item.logo}} />

      <Text style={styles.desc}>{props.item.description}</Text>

      <Text style={styles.reviewText}>{props.item.review}</Text>
    </View>
  );
};

export {RestaurantCard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ffe0b2',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    // textAlign: 'center',
  },
  typeText: {
    fontStyle: 'italic',
    padding: 5,
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 2.5,
    margin: 10,
  },
  desc: {
    padding: 5,
    lineHeight: 17,
    fontWeight: 'bold',
  },
  reviewText: {
    margin: 5,
    fontSize: 17,
    fontStyle: 'italic',
  },
});
