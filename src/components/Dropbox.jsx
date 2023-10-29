import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "../utils/Data";
import { AntDesign } from "@expo/vector-icons";

const Dropbox = () => {
  const [myIndex, setMyIndex] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setMyIndex(index);
                setToggle(!toggle);
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 1,
                marginBottom: 10,
                paddingVertical: 20,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {item.title}
              </Text>
              <AntDesign
                name={myIndex == index && toggle ? "down" : "right"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {myIndex == index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default Dropbox;
