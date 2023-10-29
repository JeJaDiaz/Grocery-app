import { View, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const HomeBanner = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ height: responsiveHeight(14), resizeMode: "contain" }}
        source={require("../../assets/banner.png")}
      />
    </View>
  );
};

export default HomeBanner;
