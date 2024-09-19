import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Icon, { Icons } from "../utilities/Icons";

const Tab = createBottomTabNavigator();

const Tabs = [
  {
    route: "Home",
    label: "Home",
    inActiveIconName: "home",
    activeIconName: "home",
    type: Icons.Entypo,
    component: Home,
  },
  {
    route: "Profile",
    label: "Profile",
    inActiveIconName: "user",
    activeIconName: "user",
    type: Icons.FontAwesome,
    component: Profile,
  },
];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      className={`flex mr-2 h-2 justify-center ${focused ? "border-t-2 border-black" : "border-t-2 border-transparent"}`}
      onPress={onPress}
      activeOpacity={1}
      style={[
        {
          width: 60,
          height: 60,
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <Icon
        name={focused ? item.activeIconName : item.inActiveIconName}
        type={item.type}
        color={focused ? "black" : "#99999690"}
        size={24}
        className="mt-2"
      />
      <Text
        className={`${focused ? "text-black font-semibold" : "text-[#99999690]"} mb-5`}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
          screenOptions={{
            headerShown:false,
        tabBarStyle: {
          height: 50,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          display: "flex",
        },
      }}
    >
      {Tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
