import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.replace('Signup')
    }, 2000)
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: myColors.primary,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          style={{ tintColor: "white", height: 75, width: 65 }}
          source={require("../../assets/icon.png")}
        />
        <View>
          <Text
            style={{ fontSize: 80, fontWeight: 700, color: myColors.secondary }}
          >
            nustar
          </Text>
          <Text
            style={{
              color: myColors.secondary,
              fontSize: 20,
              textAlign: "center",
              letterSpacing: 5,
              marginTop: -15
            }}
          >
            Online groceries
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
