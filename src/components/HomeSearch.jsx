import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";

const HomeSearch = () => {
  return (
    <View
      style={{
        backgroundColor: "#F2F3F2",
        height: responsiveHeight(6),
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 10,
      }}
    >
      <Feather name="search" size={24} color="black" />
      <TextInput style={{ flex: 1, fontSize: 20 }} placeholder="Search product" />
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({});
