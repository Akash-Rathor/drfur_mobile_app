import React from "react";
import { View,FlatList } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import Catagories from "../components/HomeScreenComponents/Catagories";
import Banner from "../components/HomeScreenComponents/Banner";

const sections = [
	{
		component: Catagories,
	},
	{
		component: Banner,
	},
];

const Home = ({navigation}) => {
	return (
		<View className="flex flex-col h-screen bg-white">
			<Header navigation={navigation} />
			<Search placeholder="Search By vet name" navigation={navigation} />
			<FlatList
				data={sections}
				renderItem={({item}) => <item.component />}
				horizontal={false}
				showsVerticleScrollIndicator={false}
			/>
		</View>
	);
};


export default Home;



