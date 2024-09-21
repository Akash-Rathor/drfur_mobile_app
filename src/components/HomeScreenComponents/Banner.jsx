import React from "react";
import { Image, Text, View } from "react-native";
import Vet from "../../assets/images/vet.png"; // Import the image statically

const Banner = ({navigation}) => {
	return (
		<View className="flex flex-col py-5 px-2 mt-5">
			<View className="flex flex-row justify-between items-center shadow-custom-light w-full h-28 border-2  border-firstprimary py-1 rounded-lg">
				<View className="flex flex-col justify-start p-5 text-start">
					<Text className="text-firstprimary text-lg font-bold">
						Vet Appointments
					</Text>
					<Text className="text-firstprimary text-lg">
						Online Consultancy of
					</Text>
					<Text className="text-firstprimary text-lg">Popular Vet</Text>
				</View>
				<View className="flex flex-row justify-end mb-2 mr-2">
					<Image source={Vet} className="w-36 h-36 -mt-7" />
				</View>
			</View>
		</View>
	);
};

export default Banner;
