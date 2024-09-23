import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import MainNavigation from "./src/routes/MainNavigation";

const App = () => {

	return (
		<>
			<SafeAreaView style={{flex: 0, backgroundColor: "#03346E"}}/>
			<SafeAreaView style={{flex: 1 , backgroundColor:"#fff"}} >
				<StatusBar 
					animated={true} 
					backgroundColor="#03346E" 
					barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'} 
				/>
				<MainNavigation />
			</SafeAreaView>
		</>
	);
};

export default App;
