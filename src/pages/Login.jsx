import React, { useEffect } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setStatusbarColor } from "../../redux/reducer";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const navigateToHome = () => {
    console.log("Navigating to Home");
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
