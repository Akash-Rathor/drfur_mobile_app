import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "../../utilities/Icons";

const updateLocation = () => {
	console.log("Update Location");
};

const navigateToWallet = () => {
	console.log("Navigate to Wallet");
};


const Header = ({navigation}) => {
	return (
		<View className="flex flex-row px-2 justify-between items-center bg-firstprimary h-10 py-1">
			<View className="flex flex-row justify-center items-center space-x-3 mt-2">
				<Icon
					type={Icons.Entypo}
					name="location-pin"
					color="white"
					size={20}
					className=""
				/>
				<TouchableOpacity onPress={updateLocation}>
					<Text className="text-white self-center text-normal font-semibold ">
						Delhi
					</Text>
					<View className="h-0.5 w-full bg-white"></View>
				</TouchableOpacity>
			</View>
			{/* <TouchableOpacity
				onPress={navigateToWallet}
				className="flex flex-row justify-center items-center space-x-2 border-white mt-2"
			>
				<Icon type={Icons.Entypo} name="wallet" color="white" size={28} />
			</TouchableOpacity> */}
		</View>
	);
};

export default Header