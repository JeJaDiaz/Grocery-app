import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Dropbox from "../components/Dropbox";
import { myColors } from "../utils/MyColors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const Details = ({ route }) => {
  const storeData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const productData = route.params.data;
  const { name, price, pieces, img } = productData;
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          style={{
            height: 300,
            resizeMode: "contain",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{
            uri: img,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingHorizontal: 20,
            position: "absolute",
            width: "100%",
            alignItems: "center",
          }}
        >
          <AntDesign
            onPress={() => {
              nav.goBack();
            }}
            name="arrowleft"
            size={28}
            color="black"
          />
          <Ionicons name="share-outline" size={28} color="black" />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 30, color: "black", fontWeight: 700 }}>
            {name.charAt(0).toLocaleUpperCase() + name.slice(1)}
          </Text>
          <FontAwesome5 name="heart" size={24} color="black" />
        </View>
        <Text style={{ opacity: 0.8, fontSize: 15 }}>{pieces}, Price</Text>
        <Text style={{ fontSize: 30, fontWeight: 600 }}>₱{price}</Text>
        <Dropbox />
        <View style={{ flex: 0.9, justifyContent: "flex-end" }}>
          {storeData.some((value) => value.name == productData.name) ? (
            <TouchableOpacity
              disabled={true}
              activeOpacity={0.8}
              style={{
                backgroundColor: "tomato",
                height: 70,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Added to Basket
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(productData));
                nav.navigate("Cart");
              }}
              activeOpacity={0.8}
              style={{
                backgroundColor: myColors.primary,
                height: 70,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Add to Basket
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
