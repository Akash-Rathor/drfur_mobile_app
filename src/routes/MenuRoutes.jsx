import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import MyPets from "../pages/MyPets";
import MedicalRecords from "../pages/MedicalRecords";
import Profile from "../pages/Profile";
import ProfileSettingsMenu from "../pages/ProfileSettings";
import PreviousConsultations from "../pages/PreviousConsultations";
import Doctors from "../pages/Doctors";
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
				component={ProfileSettingsMenu}
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
