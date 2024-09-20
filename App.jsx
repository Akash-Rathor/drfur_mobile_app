import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import MainNavigation from "./src/routes/MainNavigation";

enableScreens();

const App = () => {

	return (
		<SafeAreaView style={{flex: 1}}>
				<StatusBar animated={true} backgroundColor="#03346E" />
				<MainNavigation />
			</SafeAreaView>
	);
};

export default App;
