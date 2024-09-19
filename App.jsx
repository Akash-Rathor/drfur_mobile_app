import React, {useEffect} from "react";
import {SafeAreaView, StatusBar} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {setStatusbarColor} from "./redux/reducer"; // Import action
import "react-native-gesture-handler";
import {enableScreens} from "react-native-screens";
import MainNavigation from "./src/routes/MainNavigation";

enableScreens();

const App = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
			<SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
				<StatusBar animated={true} backgroundColor="#03346E" />
				<MainNavigation />
			</SafeAreaView>
		</SafeAreaView>
	);
};

export default App;
