import React from "react";
import { View } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import Catagories from "../components/HomeScreenComponents/Catagories";

const Home = ({navigation}) => {
	return (
		<View className="flex flex-col h-screen">
			<NavBar
				title="FurAssist"
				navigation={navigation}
				showBackButton={false}
			/>
			<Header />
      <Search placeholder='Search By Doctor or Pet' />
      <Catagories />
		</View>
	);
};


export default Home;



