import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Vet from "../../assets/images/vet.png"; // Import the image statically
import Svg, { Defs, Rect, LinearGradient, Stop } from "react-native-svg";

const Banner = ({ navigation }) => {
	return (
		<View className="flex flex-col py-4 mt-5">
			<View className="flex flex-row justify-between items-center w-full h-28 py-1">
				<Svg height="100%" width="100%" style={[StyleSheet.absoluteFill]}>
					<Defs>
						<LinearGradient
							id={`gradient-${1}`}
							x1="0%"
							y1="0%"
							x2="80%"
							y2="100%"
						>
							<Stop
								offset="0%"
								stopColor={"rgb(74, 204, 14)"}
								stopOpacity="1"
							/>
							<Stop
								offset="100%"
								stopColor={"rgb(245, 245, 247)"}
								stopOpacity="1"
							/>
						</LinearGradient>
					</Defs>
					<Rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						rx="10"
						ry="10"
						fill={`url(#gradient-${1})`}
					/>
				</Svg>
				<View className="flex flex-col justify-start p-5 text-start">
					<Text className="text-white text-lg font-bold">Vet Appointments</Text>
					<Text className="text-white text-md">Online Consultancy of</Text>
					<Text className="text-white text-md">Popular Vet</Text>
				</View>
				<View className="flex flex-row justify-end mr-0.5">
					<Image source={Vet} className="w-40 h-36 -mt-12 bg-transparent" />
				</View>
			</View>
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	gradient: {
		borderRadius: 10,
	},
});
