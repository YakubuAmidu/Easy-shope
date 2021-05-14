import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import TraficLight from "./StyledComponents/TraficLight";
import EasyButton from "./StyledComponents/EasyButton";
import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../assets/common/baseUrl";

const OrderCard = (props) => {
  const [orderStatus, setOrderStatus] = useState();
  const [statusText, setStatusText] = useState();
  const [statusChange, setStatusChange] = useState();
  const [token, setToken] = useState();
  const [cardColor, setCardColor] = useState();

  useEffect(() => {
    if (props.status == "3") {
      setOrderStatus(<TrakfickLight unavailable></TrakfickLight>);
      setStatusText("Pending");
      setCardColor("#E74C3C");
    } else if (props.status == "2") {
      setOrderStatus(<TraficLight limited></TraficLight>);
      setStatusText("Shipped");
      setCardColor("#F1C40F");
    } else {
      setOrderStatus();
      setStatusText();
      setCardColor();
    }
  }, []);

  return (
    <View style={[{ backgroundColor: cardColor }, styles.container]}>
      <View style={styles.container}>
        <Text>Order Number: #{props.id}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          status: {statusText} {orderStatus}
        </Text>
        <Text>
          Address: {props.shippingAddress1} {props.shippingAddress2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    backgroundColor: "#62b1f6",
    padding: 5,
  },
});
export default OrderCard;
