import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighLight,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var { width } = Dimensions.get('window');

const ListItem = (props) => {
  return (
    <View>
      <TouchableOpacity
      //onPress
      >
        <Image
          source={{
            uri: props.image
              ? props.image
              : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
          }}
          rensizeMode="contain"
        />
        <Text>{props.brand}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {props.category.name}
        </Text>
        <Text>$ {props.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
