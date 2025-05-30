import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useRef} from "react";
import Doctors from "../pages/Doctors";
import Wallets from "../pages/Wallets";

const Stack = createNativeStackNavigator();

const EcommerceRoutes = ({route}) => {
	const {item} = route.params || {};

	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName="Doctor"
		>
			{/* Pass the item as initial params to Doctor */}
			<Stack.Screen
				name="ProductView"
				component={Doctors}
				initialParams={{item}}
			/>
			<Stack.Screen name="payment" component={Doctors} initialParams={{item}} />
			<Stack.Screen name="cart" component={Doctors} initialParams={{item}} />
			<Stack.Screen
				name="uploadProduct"
				component={Doctors}
				initialParams={{item}}
			/>
			<Stack.Screen name="Orders" component={Doctors} initialParams={{item}} />
			{/*// this one is to sell products*/}
			<Stack.Screen
				name="my_orders"
				component={Doctors}
				initialParams={{item}}
			/>
			{/*// this one is to purchased products*/}
		</Stack.Navigator>
	);
};

export default EcommerceRoutes;

