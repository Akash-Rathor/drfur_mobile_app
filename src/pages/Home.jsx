import React from "react";
import { View, FlatList, Platform } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import Catagories from "../components/HomeScreenComponents/Catagories";
import Banner from "../components/HomeScreenComponents/Banner";
import TopVets from "../components/HomeScreenComponents/TopVets";
import Services from "../components/HomeScreenComponents/Services";
import LastBanner from "../components/HomeScreenComponents/LastBanner";

const BottomSpacing = () => {
	return <View className="mb-5 bg-transparent"></View>;
}

const sections = [
	{
		component: (props) => <Catagories {...props} />,
	},
	{
		component: (props) => (
			<View className="px-4">
				<Banner {...props} />
			</View>
		),
	},
	{
		component: (props) => (
			<View className="px-4">
				<TopVets {...props} />
			</View>
		),
	},
	{
		component: (props) => (
			<View className="px-4">
				<Services {...props} />
			</View>
		),
	},
	{
		component: (props) => (
			<View className="px-4">
				<LastBanner {...props} />
			</View>
		),
	},
	{
		// this is to add spacing at the bottom of the page, hence must be the last component
		component: BottomSpacing,
	},
];

const Home = ({ navigation }) => {
	return (
		<View className="flex flex-col h-screen bg-white">
			<NavBar
				title="FurAssist"
				navigation={navigation}
				showBackButton={false}
				bg_color="bg-firstprimary"
			/>
			<Header navigation={navigation} />
			<Search placeholder="Search By vet name" navigation={navigation} />
			<FlatList
				data={sections}
				renderItem={({ item }) => <item.component navigation={navigation} />}
				showsVerticalScrollIndicator={false}
				style={{ marginBottom: Platform.OS === 'ios' ? "30%" : "15%" }}
			/>
		</View>
	);
};

export default Home;
