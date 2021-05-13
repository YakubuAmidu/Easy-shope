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

  return <View></View>;
};
export default OrderCard;
