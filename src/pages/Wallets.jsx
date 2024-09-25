import React, {useEffect} from "react";
import { View } from 'react-native'
import NavBar from '../components/NavBar'

const Wallets = ({ navigation }) => {

	return (
		<View>
			<NavBar
				title="Wallets"
				navigation={navigation}
				bg_color_text="black"
				showBackButton={true}
				goBackWhere="ProfileSettings"
				showProfileButton={false}
			/>
		</View>
	);
} 

export default Wallets