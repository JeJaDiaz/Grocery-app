import { View, Text, Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 50, height: 60 }}
      />
    </View>
  );
};

export default HomeIcon;
