import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';
import { Header, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import ListItem from './ListItem';

import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

var { height, width } = Dimensions.get('window');

const Products = (props) => {
  const [product, setProduct] = useState();
  const [productFilter, setProductFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  useFocusEffect(
    useCallback(() => {
      //Get Token
      AsyncStorage.getItem('jwt')
        .then((res) => {
          setToken(res);
        })
        .catch((error) => console.log(error));

      axios.get(`${baseURL}products`).then((res) => {
        setProductList(res.data);
        setProductFilter(res.data);
        setLoading(false);
      });
      return () => {
        setProductList();
        setProductFilter();
        setLoading(true);
      };
    }, [])
  );

  return (
    <View>
      <View>
        <Header searchBar rounded>
          <Item style={{ padding: 5 }}>
            <Icon name="search" />
            <Input
              placeholder="Search"
              // onChange
            />
          </Item>
        </Header>
      </View>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={productFilter}
          renderItem={({ item, index }) => (
            <ListItem {...item} navigation={props.navigator} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Products;
