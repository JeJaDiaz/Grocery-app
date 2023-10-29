import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../utils/MyColors";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price * element.quantity;
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
        gap: 1,
      }}
    >
      <StatusBar backgroundColor="white" />
      <Text
        style={{
          marginTop: 15,
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        My Cart
      </Text>
      <View style={{ flex: 0.98 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(20),
                borderBottomWidth: 2,
                borderBottomColor: "#E3E3E3",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  style={{ height: 100, resizeMode: "contain" }}
                />
              </View>
              <View
                style={{
                  flex: 0.6,
                  paddingHorizontal: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 30, fontWeight: 600 }}>
                    {item.name.charAt(0).toLocaleUpperCase() +
                      item.name.slice(1)}
                  </Text>
                  <AntDesign
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                    name="close"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={{ opacity: 0.6, marginTop: -30 }}>
                  {item.pieces}, price
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 8,
                      alignItems: "center",
                      marginTop: 2,
                    }}
                  >
                    <AntDesign
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                      name="minuscircleo"
                      size={30}
                      color="tomato"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>
                      {item.quantity}
                    </Text>
                    <AntDesign
                      onPress={() => {
                        //set to max limit of quantity to order
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                      name="pluscircleo"
                      size={30}
                      color={myColors.primary}
                    />
                  </View>
                  <Text style={{ fontSize: 30, fontWeight: 500 }}>
                    ₱{Math.floor(item.quantity * item.price)}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("CheckOut");
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
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Go to Checkout
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 500, color: "white" }}>
              ₱{Math.floor(amount)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
