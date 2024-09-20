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
		<View className="flex flex-row px-2 justify-between items-center bg-firstprimary h-10">
			<TouchableOpacity
				onPress={updateLocation}
				className="flex flex-row justify-center items-center space-x-3"
			>
				<Icon
					type={Icons.Entypo}
					name="location"
					color="white"
					size={18}
					className="ml-2"
				/>
				<View>
					<Text className="text-white self-center text-lg font-semibold">
						Delhi
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={navigateToWallet}
				className="flex flex-row justify-center items-center space-x-2"
			>
				<Icon type={Icons.Entypo} name="wallet" color="white" size={26} />
			</TouchableOpacity>
		</View>
	);
};

export default Header