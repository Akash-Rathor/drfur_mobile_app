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
import NavBar from "../components/NavBar";

const PrescriptionCards = ({viewed, title, description, date, navigation}) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Home")}>
			<View>
				<View
					className={`flex flex-row p-2`}
					style={{backgroundColor: viewed ? "#3572EF35" : "white"}}
				>
					{/* <Image source={Cat} className="w-12 h-12 rounded-md mr-2 bg-white" /> */}
					<View className="flex flex-col flex-1">
						<View className="flex flex-row justify-between">
							<Text className="font-semibold flex-1">{title}</Text>

                            <Text className="text-sm text-gray-500">
                                {date}
							</Text>
						</View>
						<Text className="text-sm text-wrap">{description}</Text>
					</View>
				</View>
				<View className="w-full border-slate-500 ml-5 rounded-full border-b" />
			</View>
		</TouchableOpacity>
	);
};

const Prescriptions = ({navigation}) => {
	const [prescriptions, setPrescriptions] = useState([
		{
			title: "Appointment Reminder",
			description:
				"Don't forget your appointment tomorrow tomorrow tomorrow tomorrow tomorrow at 10 AM.",
			date: "2024-01-09",
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: "2024-01-09",
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: "2024-01-09",
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: "2024-01-09",
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: "2024-01-09",
		},
	]);

	return (
		<>
			<NavBar
				title="Prescriptions"
				bg_color_text="black"
				navigation={navigation}
				showBackButton={false}
			/>
			<View className="flex flex-col h-screen bg-slate-100">
				<View className="flex flex-col bg-red-80 flex-1">
					<FlatList
						data={prescriptions}
						renderItem={({item}) => (
							<PrescriptionCards
								viewed={item.viewed}
								title={item.title}
								description={item.description}
								date={item.date}
								navigation={navigation}
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

export default Prescriptions;
