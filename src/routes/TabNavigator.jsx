import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Appointments from "../pages/Appointments";
import Home from "../pages/Home";
import Notifications from "../pages/Notifications";
import ProductListing from "../pages/ProductListing";
import Icon, { Icons } from "../utilities/Icons";
import MenuRoutes from "./MenuRoutes";

const Tab = createBottomTabNavigator();

const Tabs = [
	{
		route: "Home",
		label: "Home",
		inActiveType: Icons.AntDesign,
		inActiveIconName: "home",
		activeType: Icons.FontAwesome,
		activeIconName: "home",
		component: Home,
		badge: false,
	},
	{
		route: "Appointments",
		label: "Appointments",
		inActiveType: Icons.EvilIcons,
		inActiveIconName: "calendar",
		activeType: Icons.AntDesign,
		activeIconName: "calendar",
		component: Appointments,
		badge: true,
	},
	// {
	// 	route: "Products",
	// 	label: "Products",
	// 	inActiveType: Icons.AntDesign,
	// 	inActiveIconName: "shoppingcart",
	// 	activeType: Icons.FontAwesome5,
	// 	activeIconName: "shopping-cart",
	// 	component: ProductListing,
	// 	badge: false,
	// },
	{
		route: "Notifications",
		label: "Notifications",
		inActiveType: Icons.AntDesign,
		inActiveIconName: "bells",
		activeType: Icons.Entypo,
		activeIconName: "bell",
		component: Notifications,
		badge: true,
	},
	{
		route: "Menu",
		label: "Menu",
		inActiveType: Icons.Entypo,
		inActiveIconName: "menu",
		activeType: Icons.MaterialCommunityIcons,
		activeIconName: "menu-open",
		component: MenuRoutes,
		badge: false,
	},
];

const TabButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;

	return (
		<TouchableOpacity
			className="flex justify-center items-center"
			onPress={onPress}
			activeOpacity={1}
			style={{
				width: Tabs.length === 4 ? Tabs.length * 25 : Tabs.length === 5 ? Tabs.length * 15 : Tabs.length * 10,
				height: Platform.OS === "ios" ? 40 : 46,
				alignItems: "center",
				position: "relative",
			}}
		>
			{/* Line above the icon with rounded bottom */}
			<View
				className={`w-12 ${focused ? "bg-firstprimary border-b rounded-b-full opacity-80" : "bg-transparent"}`}
				style={{height: 3.5}}
			/>

			<View className="mt-1" />
			{item.badge && (
				<View
					className={`flex justify-center items-center absolute ${focused ? "" : "top-2 right-5 bg-red-700"} rounded-full w-4 h-4 `}
					style={{zIndex: 10}}
				>
					{!focused && (
						<Text
							className="text-white self-center text-center"
							style={{fontSize: 10}}
						>
							9+
						</Text>
					)}
				</View>
			)}
			<Icon
				name={focused ? item.activeIconName : item.inActiveIconName}
				type={focused ? item.activeType : item.inActiveType}
				color={focused ? "#03346E" : "#99999690"}
				size={20}
			/>

			<Text
				className={`${focused ? "text-firstprimary font-semibold opacity-80" : "text-[#999996]"}`}
				style={{fontSize: 10}}
			>
				{item.label}
			</Text>
		</TouchableOpacity>
	);
};

export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: Platform.OS === "ios" ? 40 : 50,
					position: "absolute",
					justifyContent: "space-between",
					alignItems: "center",
					zIndex: 1000,
					borderTopWidth: 0,
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
