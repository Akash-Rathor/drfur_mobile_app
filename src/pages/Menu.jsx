import React from "react";
import {
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import NavBar from "../components/NavBar";
import Icon, { Icons } from "../utilities/Icons";

const MenuItem = ({title, icon, route,navigation}) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(route)}
			className="flex flex-row justify-between items-center bg-white"
		>
			<View className="flex flex-row items-center py-3">
				<View className="flex flex-row items-center">
					{icon}
					<Text className="text-md flex-grow ml-2 text-firstprimary">
						{title}
					</Text>
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

const ProfileTabs = [
	// {
	// 	title: "My Profile",
	// 	icon: (
	// 		<Icon
	// 			type={Icons.AntDesign}
	// 			name="user"
	// 			color="#03346E"
	// 			size={20}
	// 			className="ml-2"
	// 		/>
	// 	),
	// 	route: "Profile",
	// },
	{
		title: "My Pets",
		icon: (
			<Icon
				type={Icons.MaterialIcons}
				name="pets"
				color="#03346E"
				size={20}
				className="ml-2"
			/>
		),
		route: "MyPets",
	},
	{
		title: "Medical Records",
		icon: (
			<Icon
				type={Icons.Entypo}
				name="open-book"
				color="#03346E"
				size={20}
				className="ml-2"
			/>
		),
		route: "MedicalRecords",
	},
	{
		title: "Previous Consultations",
		icon: (
			<Icon
				type={Icons.FontAwesome5}
				name="hand-holding-medical"
				color="#03346E"
				size={20}
				className="ml-2"
			/>
		),
		route: "PreviousConsultations",
	},
	{
		title: "Doctors",
		icon: (
			<Icon
				type={Icons.FontAwesome5}
				name="hand-holding-medical"
				color="#03346E"
				size={20}
				className="ml-2"
			/>
		),
		route: "Doctors",
	},
];

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
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 4,
						backgroundColor: "white",
					}}
				>
					<FlatList
						data={ProfileTabs}
						renderItem={({item}) => (
							<MenuItem
								title={item.title}
								icon={item.icon}
								route={item.route}
								navigation={navigation}
							/>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Menu;
