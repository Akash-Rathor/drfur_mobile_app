import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import Vet from "../../assets/images/vet.png";
import Dog from "../../assets/images/dog.jpg";
import Cat from "../../assets/images/cat.jpg";
import Horse from "../../assets/images/horse.jpg";
import GradientView from "../utilityComponents/GradientView";

import Icon, {Icons} from "../../utilities/Icons";

const Data = {
	column1: [
		{
			degree: "D.V.M.",
			name: "Bria Vance",
			location: "Ashok Vihar",
			ratings: "5/5",
			status: "Available",
			image: Dog,
		},
		{
			degree: "D.V.M.",
			name: "Talon Donaldson",
			location: "Rohini Sector-22",
			ratings: "4.87/5",
			status: "Busy",
			image: Cat,
		},
	],
	column2: [
		{
			degree: "D.V.M.",
			name: "Remington Montgomery",
			location: "Dwarka sector 33",
			ratings: "4.3/5",
			status: "Offline",
			image: Vet,
		},
		{
			degree: "D.V.M.",
			name: "Natasha Hudson",
			location: "Preet Vihar",
			ratings: "4.9/5",
			status: "Available",
			image: Horse,
		},
	],
};

	const CardsColumn = ({ data }) => {
		return (
			<View className="flex flex-row justify-between items-center w-full mb-5">
				{data.map((item, index) => (
					<TouchableOpacity
						key={index}
						className="flex relative justify-center flex-col items-center w-40 h-auto rounded-lg  p-2"
					>
						<GradientView
							from_color="rgb(0,0,0)"
							to_color="rgb(215, 215, 224)"
							x1="0%"
							x2="100%"
							y1="80%"
							y2="100%"
						></GradientView>
						<View
							className={`absolute rounded-full ${item.status === "Busy" ? "bg-red-600" : item.status === "Available" ? "bg-successgreen" : "bg-yellowishGreen"} w-3 h-3 right-4 top-2`}
						></View>
						<Image
							source={item.image}
							alt="Vet"
							className="w-20 h-20 rounded-full"
						/>
						<View className="flex flex-col justify-between items-center p-1">
							<View className="flex flex-col space-x-1 justify-start items-center flex-wrap">
								<Text className="font-bold text-white">{item.degree}</Text>
								<Text className="text-white text-center font-semibold">
									{item.name}
								</Text>
							</View>
							<View className="flex flex-row self-start py-1">
								<Icon
									type={Icons.Entypo}
									name="location-pin"
									color="#FFD700"
									size={20}
								/>
								<Text className="text-white ml-2 font-semibold">
									{item.location}
								</Text>
							</View>
							<View className="flex flex-row self-start items-center ">
								<Icon
									type={Icons.Entypo}
									name="star"
									color="#FFD700"
									size={20}
								/>
								<Text className="text-wrap text-white ml-2 font-semibold">
									{item.ratings}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	};


const TopVets = ({navigation}) => {
	return (
		<View className="flex flex-col justify-center items-center space-y-2 w-full">
			<Text className="text-lg self-start font-semibold text-firstprimary mb-2">
				Top vets in your city
			</Text>
			{<CardsColumn data={Data.column1} />}
			{<CardsColumn data={Data.column2} />}
		</View>
	);
};

export default TopVets;
