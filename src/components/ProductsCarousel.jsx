import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../utils/MyColors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/CartSlice";

const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  console.log(storeData)
  const nav = useNavigation();

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                data: item,
              });
            }}
            activeOpacity={0.7}
            style={{
              height: responsiveHeight(25),
              width: responsiveWidth(40),
              marginRight: 15,
              borderRadius: 15,
              borderColor: "#E3E3E3",
              borderWidth: 2,
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{
                height: 120,
                width: 120,
                alignSelf: "center",
                resizeMode: "contain",
              }}
              source={{ uri: item.img }}
            />
            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>
                {item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ opacity: 0.7 }}>{item.pieces}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Text
                style={{ fontWeight: 600, fontSize: 20 }}
              >{`₱${item.price}`}</Text>
              {storeData.some((value) => value.name == item.name) ? (
                <AntDesign
                  onPress={() => {
                    dispatch(removeFromCart(item));
                  }}
                  name="minussquare"
                  size={30}
                  color={myColors.primary}
                />
              ) : (
                <AntDesign
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  name="plussquare"
                  size={30}
                  color={myColors.primary}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;
