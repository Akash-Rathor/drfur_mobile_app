import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
	const {item, onPress, accessibilityState} = props;
	const focused = accessibilityState.selected;

	return (
		<TouchableOpacity
			className="flex justify-center items-center"
			onPress={onPress}
			activeOpacity={1}
			style={{
				width: 80,
				height: 56,
				alignItems: "center",
				position: "relative",
			}}
		>
			{/* Line above the icon with rounded bottom */}
			<View
				className={`w-12 h-1.5 mb-2.5 ${focused ? "bg-firstprimary border-b rounded-b-full" : "bg-transparent"}`}
			/>

			{/* Icon */}
			<Icon
				name={focused ? item.activeIconName : item.inActiveIconName}
				type={item.type}
				color={focused ? "#03346E" : "#99999690"}
				size={24}
				className="" // Adjust margin to add spacing between icon and text
			/>

			{/* Label */}
			<Text
				className={`text-xs ${focused ? "text-firstprimary font-semibold" : "text-[#99999690]"}`}
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
				headerShown: false,
				tabBarStyle: {
					height: 60, // Increased height for the tab bar to fit everything
					position: "absolute",
					justifyContent: "center",
					alignItems: "center",
					zIndex: 1000,
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
