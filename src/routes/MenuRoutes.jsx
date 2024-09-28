import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Doctors from "../pages/Doctors";
import MedicalRecords from "../pages/MedicalRecords";
import MyPets from "../pages/MyPets";
import PreviousConsultations from "../pages/PreviousConsultations";
import Profile from "../pages/Profile";
import Menu from "../pages/Menu";
const Stack = createNativeStackNavigator();

const MenuRoutes = ({route}) => {
	const {item} = route.params || {};

	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName="ProfileSettings"
		>
			<Stack.Screen
				name="ProfileSettings"
				component={Menu}
				initialParams={{item}}
			/>
			<Stack.Screen name="MyPets" component={MyPets} initialParams={{item}} />
			<Stack.Screen
				name="MedicalRecords"
				component={MedicalRecords}
				initialParams={{item}}
			/>
			<Stack.Screen
				name="PreviousConsultations"
				component={PreviousConsultations}
				initialParams={{item}}
			/>
			<Stack.Screen name="Doctors" component={Doctors} initialParams={{item}} />
			<Stack.Screen name="Profile" component={Profile} initialParams={{item}} />
		</Stack.Navigator>
	);
};

export default MenuRoutes;
