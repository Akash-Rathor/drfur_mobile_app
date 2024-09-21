import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
 
import Vet from "../../assets/images/vet.png";
import Dog from "../../assets/images/dog.jpg";
import Cat from "../../assets/images/cat.jpg";
import Horse from "../../assets/images/horse.jpg";

import Icon, {Icons} from "../../utilities/Icons";

const Data = {
	column1: [
		{
			title: "Online Consultancy",
			desc: "Bria Vance",
			image: Dog,
		},
		{
			title: "Grooming services",
			desc: "Grooming Services",
			image: Cat,
		},
	],
	column2: [
		{
			title: "Online Consultancy",
			desc: "Bria Vance",
			image: Horse,
		},
		{
			title: "Online Consultancy",
			desc: "Bria Vance",
			image: Vet,
		},
	],
};

const CardsColumn = ({ data }) => {
	return (
		<View className="flex flex-row justify-between items-center py-5 px-2 w-full">
			{data.map((item,index) => {
				return (
				<View
					key={index}
					className="relative flex flex-row justify-between items-center px-2 shadow-custom-light w-[48%] h-24 border-2 border-firstprimary rounded-lg bg-gradient-to-r from-blue-100 to-green-100"
				>
					<View className="flex-1 flex-row items-center">
						<View className="flex-1">
							<Text className="text-firstprimary text-sm font-bold">
								{item.title}
							</Text>
							<Text className="text-firstprimary text-sm">
								{item.desc}
							</Text>
						</View>
						<Image source={item.image} className="w-16 h-16 object-contain rounded-lg shadow-custom-light" />
						</View>
					</View>
				);
			})}
		</View>
	);
};

const Services = ({navigation}) => {
	return (
		<View className="flex flex-col justify-center items-center px-5 w-full">
			<Text className="text-lg self-start font-semibold text-firstprimary opacity-80">
				Services
			</Text>
			{<CardsColumn data={Data.column1}/>}
			{<CardsColumn data={Data.column2}/>}
		</View>
	);
};

export default Services;
