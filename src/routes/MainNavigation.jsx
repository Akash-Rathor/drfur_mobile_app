import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        const currentRouteClass = navigationRef.getState().routes[0]?.name;
        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
        }
      }}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTabNavigations" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
