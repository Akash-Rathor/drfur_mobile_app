import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Vet from "../../assets/images/vet.png"; // Import the image statically
import GradientView from "../utilityComponents/GradientView";
import Icon,{Icons} from "../../utilities/Icons";

const LastBanner = ({navigation}) => {
	return (
		<View className="flex flex-col py-5 px-2 mt-5">
			<GradientView
				from_color="rgb(146, 156, 145)"
				to_color="rgb(0,0,0)"
				classname="rounded-lg"
			/>
			<View className="flex flex-row justify-center items-center w-full h-16 py-1 space-x-2">
				<View>
					<Icon type={Icons.Entypo} name="trophy" color="white" size={36} />
				</View>
				<View className="flex flex-col justify-center items-center text-center">
					<Text className="text-white text-lg font-bold">
						India's No. 1 Pet Care platform
					</Text>
					<Text className="text-white text-md">
						Everything you need for your pet in one place
					</Text>
				</View>
			</View>
		</View>
	);
};

export default LastBanner;

const styles = StyleSheet.create({
	gradient: {
		borderRadius: 10,
	},
});
