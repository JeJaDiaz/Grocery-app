import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../utils/MyColors";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const CheckOut = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="white" />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="verified" size={80} color={myColors.primary} />
        <Text style={{ fontSize: 40, fontWeight: 600 }}>
          Order Successfull!
        </Text>
      </View>
    </SafeAreaView>
      

  );
};

export default CheckOut;
