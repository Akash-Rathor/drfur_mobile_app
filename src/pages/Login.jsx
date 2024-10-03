import React, { useEffect } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setStatusbarColor } from "../../redux/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Vet from "../assets/images/vet.png";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const navigateToHome = async() => {

    await AsyncStorage.setItem("token",'alphabetagamma');
    const userInfo = {
			name: "Akash Rathor",
			type: "Personal",
      image: Vet,
      editable: false,
			dob: "2024-01-01",
      id: 2,
      email: "akashrathor@gmail.com",
      phone: "8587094760",
      address: "New Delhi, India",
		};
    await AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
    navigation.navigate("HomeTabNavigations");
  };

  useEffect(() => {
    dispatch(setStatusbarColor("#1a1aab"));
    return () => {
      dispatch(setStatusbarColor("#1a1aab"));
    };
  }, [dispatch]);

  return (
    <>
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl mb-5">Login Page</Text>
        <TouchableOpacity
          onPress={navigateToHome}
          activeOpacity={0.8}
          className="bg-green-600 py-2 px-5 rounded-md"
        >
          <Text className="text-white text-lg">Go Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
