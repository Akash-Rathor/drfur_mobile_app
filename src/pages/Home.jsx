import React from "react";
import { View,FlatList } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import Catagories from "../components/HomeScreenComponents/Catagories";
import Banner from "../components/HomeScreenComponents/Banner";
import TopVets from "../components/HomeScreenComponents/TopVets";
import Services from "../components/HomeScreenComponents/Services";

const sections = [
	{
		component: Catagories,
	},
	{
		component: Banner,
	},
	{
		component: TopVets,
	},
	{
		component: Services,
	},
];

const Home = ({navigation}) => {
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
				horizontal={false}
				showsVerticleScrollIndicator={false}
				style={{marginBottom:'20%'}}
			/>
		</View>
	);
};


export default Home;



