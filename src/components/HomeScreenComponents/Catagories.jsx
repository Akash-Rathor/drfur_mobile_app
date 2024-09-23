import React from "react";
import { FlatList, Image, Text, View,TouchableOpacity } from "react-native";

import Birds from "../../assets/images/birds.jpg";
import Cats from "../../assets/images/cat.jpg";
import Cow from "../../assets/images/cow.jpg";
import Dogs from "../../assets/images/dog.jpg";
import Horses from "../../assets/images/horse.jpg";
import Mix from "../../assets/images/mix.jpg";

const data = [
	{
		title: "Dogs",
		image: Dogs,
	},
	{
		title: "Cats",
		image: Cats,
	},
	{
		title: "Cows",
		image: Cow,
	},
	{
		title: "Horses",
		image: Horses,
	},
	{
		title: "Birds",
		image: Birds,
	},
	{
		title: "Others",
		image: Mix,
	},
];
const Item = ({item}) => (
	<TouchableOpacity className="flex flex-col justify-center items-center space-y-1 p-2">
		<Image
			source={item.image}
			alt={item.title}
			style={{width: 60, height: 60}}
			className="rounded-full border-2 border-gray-200"
		/>
		<Text className="text-center font-semibold text-white">{item.title}</Text>
	</TouchableOpacity>
);

const Categories = ({ navigation }) => {
	return (
		<View className="flex flex-col py-2 px-5 bg-firstprimary rounded-b-3xl">
			<Text className="text-lg font-semibold text-white">Categories</Text>
			<FlatList
				data={data}
				renderItem={({item}) => <Item item={item} />}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{paddingHorizontal: 0}}
			/>
		</View>
	);
};

export default Categories;
