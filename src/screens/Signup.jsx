import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication, database } from "../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userCredentials;

  const uid = uuid.v4();
  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.navigate("Login");
        setDoc(doc(database, "users", uid), {
          username: name,
          email: email,
          id: authentication.currentUser.uid,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        console.error(error);
      });
    setUserCredentials({ name: "", email: "", password: "" });
  };

  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/icon.png")}
        />
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={{ fontSize: 40, fontWeight: 500 }}>Sign Up</Text>
          <Text
            style={{ fontSize: 15, opacity: 0.5, color: "gray", marginTop: 10 }}
          >
            Enter your credentials to continue
          </Text>
          <Text
            style={{ color: "gray", fontSize: 15, opacity: 0.6, marginTop: 40 }}
          >
            Username
          </Text>
          <TextInput
            value={name}
            onChangeText={(value) => {
              setUserCredentials({ ...userCredentials, name: value });
            }}
            maxLength={15}
            keyboardType="name-phone-pad"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
          <Text
            style={{ color: "gray", fontSize: 15, opacity: 0.6, marginTop: 35 }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(value) => {
              setUserCredentials({ ...userCredentials, email: value });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
          <Text
            style={{ color: "gray", fontSize: 15, opacity: 0.6, marginTop: 35 }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(value) => {
                setUserCredentials({ ...userCredentials, password: value });
              }}
              secureTextEntry={isVisible}
              maxLength={15}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,
                marginTop: 15,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setIsVisible(!isVisible);
              }}
              name={isVisible == true ? "md-eye-off-outline" : "md-eye-outline"}
              size={22}
              color="black"
              style={{ paddingRight: 5 }}
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "black",
              marginTop: 15,
              letterSpacing: 1,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            By continuing you agree to our Terms of Service and Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 70,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: 500 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  nav.navigate("Login");
                }}
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: 600,
                  paddingLeft: 3,
                }}
              >
                Log in here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
