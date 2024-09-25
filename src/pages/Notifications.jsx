import React, { useEffect, useState } from "react";
import { FlatList, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Cat from '../assets/images/cat.jpg';
import NavBar from '../components/NavBar';

const NotificationCard = ({viewed,title, description, date}) => {
	const [time, setTime] = useState(date);
	const handleDelete = (title) => {
		console.log(`Deleting notification: ${title}`);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime >= 0 ? prevTime + 1 : 0));
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Swipeable
			renderRightActions={() => (
				<TouchableOpacity
					onPress={() => handleDelete(title)}
					className="bg-red-500 justify-center items-center w-20"
				>
					<Text className="text-white">Delete</Text>
				</TouchableOpacity>
			)}
		>
			<View
				className={`flex flex-row justify-start items-center p-2`}
				style={{backgroundColor: viewed ? "#3572EF35" : "white"}}
			>
				<Image source={Cat} className="w-12 h-12 rounded-md mr-2 bg-white" />
				<View className="flex flex-col mr-2 flex-1">
					<View className="flex flex-row justify-between">
						<Text className="font-semibold flex-1">{title}</Text>

						<Text className="text-sm text-gray-500">
							{time < 60 ? `${time} min` : `${Math.floor(time / 60)} hr +`}
						</Text>
					</View>
					<Text className="text-sm text-wrap">{description}</Text>
				</View>
			</View>
			<View className="w-full border-slate-500 ml-5 rounded-full border-b"></View>
		</Swipeable>
	);
};

const Notifications = ({navigation}) => {
  const [notifications, setNotifications] = useState([
		{
			title: "Appointment Reminder",
			description:
				"Don't forget your appointment tomorrow tomorrow tomorrow tomorrow tomorrow at 10 AM.",
			date: 22,
			viewed: false,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 46,
			viewed: false,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 22,
			viewed: false,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 59,
			viewed: false,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 68,
			viewed: false,
		},
	]);
  
  return (
		<View className="bg-slate-100">
			<NavBar
				title="Notifications"
				bg_color_text="black"
				navigation={navigation}
				showBackButton={false}
			/>
			<View className="flex flex-col h-screen">
				<View className="flex flex-col bg-red-80 flex-1">
					<FlatList
						data={notifications}
						renderItem={({item}) => (
							<NotificationCard
								viewed={item.viewed}
								title={item.title}
								description={item.description}
								date={item.date}
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
		</View>
	);
}

export default Notifications