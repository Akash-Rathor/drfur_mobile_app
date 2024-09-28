import React, {useEffect, useState} from "react";
import {
	FlatList,
	Image,
	Platform,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Cat from "../assets/images/cat.jpg";
import Dog from "../assets/images/dog.jpg";
import NavBar from "../components/NavBar";

const calculateAge = (dob) => {
	const birthDate = new Date(dob);
	const currentDate = new Date();
	let years = currentDate.getFullYear() - birthDate.getFullYear();
	let months = currentDate.getMonth() - birthDate.getMonth();
	if (
		months < 0 ||
		(months === 0 && currentDate.getDate() < birthDate.getDate())
	) {
		years--;
		months = 12 + months;
	}
	return {years, months};
};

const PetCard = ({ navigation, item }) => {
	const {name, type, image, dob, id} = item;
	const {years, months} = calculateAge(dob);

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Profile", {
					ProfileData: item,
					editable: true,
					type: "Pet",
				})
			}
		>
			<View className={`flex flex-row justify-start items-center p-2 bg-white`}>
				<Image source={image} className="w-12 h-12 rounded-md mr-2 bg-white" />
				<View className="flex flex-col mr-2 flex-1">
					<View className="flex flex-row justify-between">
						<Text className="font-semibold flex-1">{name}</Text>

						<Text className="text-sm text-gray-500">
							{years <= 0 ? `${months} Months` : `${years}.${months}  Yrs`}
						</Text>
					</View>
					<Text className="text-sm text-wrap">{type}</Text>
				</View>
			</View>
			<View className="w-full border-slate-500 ml-5 rounded-full border-b"></View>
		</TouchableOpacity>
	);
};

const MyPets = ({navigation}) => {
	const [Pets, setPets] = useState([
		{
			name: "Shadow",
			type: "Dog",
			image: Dog,
			dob: "2024-01-01",
			id:1,
		},
		{
			name: "Pluffy",
			type: "Cat",
			image: Cat,
			dob: "2020-01-01",
			id:2,
		},
	]);

	return (
		<>
			<NavBar
				title="My Pets"
				bg_color_text="black"
				navigation={navigation}
				showBackButton={true}
			/>
			<View className="flex flex-col h-screen bg-slate-100">
				<View className="flex flex-col bg-red-80 flex-1">
					<FlatList
						data={Pets}
						renderItem={({item}) => (
							<PetCard
								navigation={navigation}
								item={item}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={{
							paddingBottom: Platform.OS === "ios" ? "45%" : "15%",
						}}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		</>
	);
};

export default MyPets;
