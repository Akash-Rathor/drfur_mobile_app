import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useRef} from "react";
import Doctors from "../pages/Doctors";
import Wallets from "../pages/Wallets";

const Stack = createNativeStackNavigator();

const ApplicationRoutes = ({route}) => {
	const {item} = route.params || {};

	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName="Doctor"
		>
			{/* Pass the item as initial params to Doctor */}
			<Stack.Screen name="Doctor" component={Doctors} initialParams={{item}} />
			<Stack.Screen name="Wallets" component={Wallets} />
		</Stack.Navigator>
	);
};

export default ApplicationRoutes;

