import React, { useEffect, useState } from "react";
import {
	Image,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from "react-native";
import Icon, { Icons } from "../utilities/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Value = StatusBar.currentHeight / 16;

const NavBar = ({
	bg_color,
	bg_color_text = "white",
	navigation,
	title = null,
	goBackWhere = undefined,
	initialBackToLogin = false,
	showBackButton = true,
	showProfileButton = true,
	showProfileIcon = true,
}) => {
	const [userInfo, setUserInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const handNavigationGoBack = () => {
		setIsLoading(true);
		if (initialBackToLogin) {
			navigation.reset({index: 0, routes: [{name: "Login"}]});
		} else {
			if (goBackWhere) {
				navigation.navigate(goBackWhere);
			} else {
				navigation.goBack();
			}
		}
		setIsLoading(false);
	};

	useEffect(() => {
		AsyncStorage.getItem("userInfo").then((userInfoString) => {
			console.log(userInfoString);
			if (userInfoString) {
				setUserInfo(JSON.parse(userInfoString));
			}
			setIsLoading(false);
		});
	}, []);

	const moveToWallets = () => {
		navigation.navigate("Wallets");
	};

	if (!bg_color) {
		bg_color = "bg-white";
	}

	console.log(userInfo);

	if (isLoading) {
		return <ActivityIndicator size="small" color="#03346E" />;
	}

	return (
		<View
			className={`flex flex-row sticky top-0 w-full h-12 ${showBackButton ? "justify-center" : "justify-start"} 
				shadow-md items-center ${bg_color} border-b border-slate-300`}
		>
			{showBackButton && (
				<TouchableOpacity
					className="flex absolute left-1"
					onPress={handNavigationGoBack}
				>
					<Icon
						type={Icons.Ionicons}
						name="chevron-back-outline"
						size={24}
						color={bg_color_text}
					/>
				</TouchableOpacity>
			)}
			{title && (
				<Text
					className={`text-${bg_color_text} ${showBackButton ? "text-start" : "text-center"} p-2 ml-2 text-xl font-bold`}
				>
					{title}
				</Text>
			)}
			{showProfileButton && userInfo && (
				<TouchableOpacity
					className="absolute right-2 w-8 h-8 rounded-md"
					onPress={() => navigation.navigate("Profile", { ProfileData: userInfo })}
				>
					{showProfileIcon && userInfo.image && (
						<Image
							source={userInfo.image}
							className="w-full h-full rounded-md bg-white"
						/>
					)}
				</TouchableOpacity>
			)}
		</View>
	);
};

export default NavBar;
