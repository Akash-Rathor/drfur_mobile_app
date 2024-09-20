import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import Icon, { Icons } from "../../utilities/Icons";

const updateLocation = () => {
	console.log("Update Location");
};

const navigateToWallet = () => {
	console.log("Navigate to Wallet");
};


const Header = () => {
  return (
		<View className="flex flex-row px-2 justify-between items-center bg-white h-10">
			<View className="flex flex-row justify-center items-center space-x-2">
				<Icon
					type={Icons.Entypo}
					name="location"
					color="#03346E"
					size={18}
					className="ml-2"
				/>
				<TouchableOpacity onPress={updateLocation}>
					<Text className="text-firstPrimary self-center text-lg font-semibold">Delhi</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={navigateToWallet}
				className="flex flex-row justify-center items-center space-x-2"
			>
				<Icon type={Icons.Entypo} name="wallet" color="#03346E" size={26}/>
			</TouchableOpacity>
		</View>
	);
}

export default Header