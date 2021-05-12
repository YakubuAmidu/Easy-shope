import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
import baseURL from "../../Shared/StyledComponents/EasyButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

var { width } = Dimensions.get("window");

const Categories = (props) => {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;
