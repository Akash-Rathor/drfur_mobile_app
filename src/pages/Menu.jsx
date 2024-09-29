import React from "react";
import {
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import NavBar from "../components/NavBar";
import Icon, { Icons } from "../utilities/Icons";

const ProfileTabs = [
	{
		title: "My pets",
		icon: (
			<Icon
				type={Icons.MaterialIcons}
				name="pets"
				color="#8B4513"
				size={20}
				className="ml-2"
			/>
		),
		route: "MyPets",
	},
	{
		title: "Wallet",
		icon: (
			<Icon
				type={Icons.AntDesign}
				name="wallet"
				color="#4CAF50"
				size={20}
				className="ml-2"
			/>
		),
		route: "Wallets",
	},
	{
		title: "Medical records",
		icon: (
			<Icon
				type={Icons.Entypo}
				name="open-book"
				color="#FF4500"
				size={20}
				className="ml-2"
			/>
		),
		route: "MedicalRecords",
	},
	{
		title: "Previous consultations",
		icon: (
			<Icon
				type={Icons.FontAwesome5}
				name="hand-holding-medical"
				color="#2196F3"
				size={20}
				className="ml-2"
			/>
		),
		route: "PreviousConsultations",
	},
	{
		title: "Previously consulted doctors",
		icon: (
			<Icon
				type={Icons.FontAwesome5}
				name="user-nurse"
				color="#E91E63"
				size={20}
				className="ml-2"
			/>
		),
		route: "Doctors",
	},
];


const MenuItem = ({title, icon, route, navigation}) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(route)}
			className="flex flex-row justify-between items-center bg-white"
		>
			<View className="flex flex-row items-center py-3">
				<View className="flex flex-row items-center">
					{icon}
					<Text className="text-md flex-grow ml-2 opacity-80">{title}</Text>
				</View>

				<View className="absolute right-4">
					<Icon
						type={Icons.Entypo}
						name="chevron-right"
						color="#c3c6c7"
						size={20}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const Menu = ({ navigation }) => {
	
	return (
		<View className="flex flex-col h-screen bg-slate-100">
			<NavBar
				title="Menu"
				bg_color_text="black"
				navigation={navigation}
				showBackButton={false}
				showProfileIcon={false}
			/>
			<View style={{flex: 1, flexDirection: "column"}}>
				<View className="flex flex-row justify-between items-center bg-white px-2">
					<FlatList
						data={ProfileTabs}
						renderItem={({item}) => (
							<>
								<MenuItem
									title={item.title}
									icon={item.icon}
									route={item.route}
									navigation={navigation}
								/>
								<View className="h-px bg-slate-300 ml-8" />
							</>
						)}
						keyExtractor={(item) => item.route}
					/>
				</View>
			</View>
		</View>
	);
};

export default Menu;
