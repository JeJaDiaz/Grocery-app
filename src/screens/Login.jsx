import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../Firebaseconfig";

const Login = () => {
  
  //for displaying of password
  const [isVisible, setIsVisible] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password).then(
      (value) => {nav.replace('Home')}
      
    ).catch((err) => {
      Alert.alert(err);
    })    
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
          <Text style={{ fontSize: 40, fontWeight: 500 }}>Loging</Text>
          <Text
            style={{ fontSize: 15, opacity: 0.5, color: "gray", marginTop: 10 }}
          >
            Enter your email and password
          </Text>
          <Text
            style={{ color: "gray", fontSize: 15, opacity: 0.6, marginTop: 35 }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(value) => {
              setLoginCredentials({ ...loginCredentials, email: value });
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
                setLoginCredentials({ ...loginCredentials, password: value });
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
              style={{paddingRight:5}}
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
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
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
              Log In
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
            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  nav.navigate("Signup");
                }}
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: 600,
                  paddingLeft: 3,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
