import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import Vet from "../../assets/images/vet.png";
import Dog from "../../assets/images/dog.jpg";
import Cat from "../../assets/images/cat.jpg";
import Horse from "../../assets/images/horse.jpg";
import GradientView from "../utilityComponents/GradientView";

const Data = {
	column1: [
		{
			title: "Telemedicine",
			desc: "Consult vet via phone or video call",
			image: Dog,
			from_color: "rgb(222, 151, 38)",
			to_color: "rgb(247, 248, 252)",
		},
		{
			title: "Grooming services",
			desc: "Book grooming session nearby",
			image: Cat,
			from_color: "rgb(222, 38, 216)",
			to_color: "rgb(247, 248, 252)",
		},
	],
	column2: [
		{
			title: "Online Medecines",
			desc: "Buy your pet's medicine online",
			image: Horse,
			from_color: "rgb(20, 26, 115)",
			to_color: "rgb(247, 248, 252)",
		},
		{
			title: "Pet Products",
			desc: "Food, leash, toys, and everything your pet needs. ",
			image: Vet,
			from_color: "rgb(46, 191, 51)",
			to_color: "rgb(247, 248, 252)",
		},
	],
};

const CardsColumn = ({data}) => {
	return (
		<View className="flex flex-row justify-between items-center px-2 w-full" style={styles.card}>
			{data.map((item, index) => {
				return (
					<TouchableOpacity
						key={index}
						className="relative flex flex-row justify-between items-center px-2 w-[48%] h-20 rounded-lg overflow-hidden"
					>
						<GradientView
							from_color={item.from_color}
							to_color={item.to_color}
							index={index}
							classname="absolute inset-0"
						>
							<View className="flex-1 flex-row items-center space-x-1 p-2">
								<View className="flex-1">
									<Text className="text-white text-xs font-black">
										{item.title}
									</Text>
									<Text className="text-white text-xs">{item.desc}</Text>
								</View>
								<Image
									source={item.image}
									style={styles.image}
									className="w-14 h-14 object-contain rounded-lg shadow-lg"
								/>
							</View>
						</GradientView>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const Services = ({navigation}) => {
	return (
		<View className="flex flex-col justify-center items-center w-full">
			<Text className="text-lg self-start font-semibold text-firstprimary mb-2">
				Our Services
			</Text>
			<View className="flex flex-col justify-center items-center w-full">
				{<CardsColumn data={Data.column1} />}
				<View className='mt-2'>
					{<CardsColumn data={Data.column2}/>}
				</View>
			</View>
		</View>
	);
};

export default Services;


const styles = StyleSheet.create({
	card: {
		boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
		elevation: 5,
	},
	image: {
		shadowColor: "#798c7e",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 5,
	},
});
