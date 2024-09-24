import React, {useState, useEffect} from "react";
import {
	View,
	Text,
	FlatList,
	Platform,
	TouchableOpacity,
	Image,
  Button,
} from "react-native";
import NavBar from "../components/NavBar";
import {Swipeable} from "react-native-gesture-handler";
import Cat from "../assets/images/cat.jpg";

const NotificationCard = ({viewed, title, description, date, navigation}) => {
	const [time, setTime] = useState(date);
	const handleDelete = (title) => {
		console.log(`Deleting notification: ${title}`);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime >= 0 ? prevTime - 1 : 0));
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return (
		<TouchableOpacity onPress={() => navigation.navigate("Home")}>
			{/* <Swipeable
				renderRightActions={() => (
					<TouchableOpacity
						onPress={() => handleDelete(title)}
						className="bg-red-500 justify-center items-center w-20"
					>
						<Text className="text-white">Delete</Text>
					</TouchableOpacity>
				)}
			> */}
			<View>
				<View
					className={`flex flex-row p-2`}
					style={{backgroundColor: viewed ? "#3572EF35" : "white"}}
				>
					<Image source={Cat} className="w-12 h-12 rounded-md mr-2 bg-white" />
					<View className="flex flex-col flex-1">
						<View className="flex flex-row justify-between">
							<Text className="font-semibold flex-1">{title}</Text>

							<Text className="text-sm text-gray-500">
								{time === 0
									? "Now"
									: time < 0
										? "Expired"
										: time < 60
											? `In ${time} min`
											: `In ${Math.floor(time / 60)} hr`}
							</Text>
						</View>
						<Text className="text-sm text-wrap">{description}</Text>
						{/* <TouchableOpacity
							className="flex justify-center items-center bg-firstprimary opacity-70 text-white w-12 h-6 rounded-md mt-1"
							onPress={() => navigation.navigate("Profile")}
						>
							<Text className="text-sm text-white ">View</Text>
						</TouchableOpacity> */}
					</View>
				</View>
			</View>
			{/* </Swipeable> */}
		</TouchableOpacity>
	);
};

const Appointments = ({navigation}) => {
	const [notifications, setNotifications] = useState([
		{
			title: "Appointment Reminder",
			description:
				"Don't forget your appointment tomorrow tomorrow tomorrow tomorrow tomorrow at 10 AM.",
			date: 1,
			viewed: true,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 0,
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
			viewed: true,
		},
		{
			title: "Vaccination Update",
			description: "Your pet has received the required vaccinations.",
			date: 123,
			viewed: false,
		},
	]);

	return (
		<>
			<NavBar
				title="Upcoming Appointments"
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

export default Appointments;
