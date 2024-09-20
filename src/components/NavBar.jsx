import React from "react";
import {
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import Icon, { Icons } from "../utilities/Icons";
const Value = StatusBar.currentHeight / 16;

const NavBar = ({
	bg_color,
	navigation,
	title = null,
    initialBackToLogin = false,
    showBackButton = true,
}) => {
	const handNavigationGoBack = () => {
		if (initialBackToLogin) {
			navigation.reset({index: 0, routes: [{name: "Login"}]});
		} else {
			navigation.goBack(null);
		}
	};

	if (!bg_color) {
		bg_color = "bg-white";
	}

	return (
		<SafeAreaView>
			<View
				onPress={handNavigationGoBack}
				className={`flex flex-row sticky top-0 w-full h-10 ${showBackButton ? "justify-center" : "justify-start"} items-center ${bg_color}`}
			>
				{showBackButton && (
					<TouchableOpacity className="flex absolute left-1">
						<Icon
							type={Icons.Ionicons}
							name="chevron-back-outline"
							size={24}
							color="#03346E"
						></Icon>
					</TouchableOpacity>
				)}
				{/* <View className="flex items-center justify-center"> */}
				{title && (
					<Text
						className={`text-firstprimary ${showBackButton ? "text-start" : "text-center"} p-2 ml-2 text-xl font-bold`}
					>
						{title}
					</Text>
				)}
			</View>
		</SafeAreaView>
	);
};

export default NavBar;
