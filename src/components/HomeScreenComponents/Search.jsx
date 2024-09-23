import React, { useState } from 'react';
import { View } from 'react-native';
import Icon, { Icons } from '../../utilities/Icons';
import InputField from '../utilityComponents/InputField';

const Search = ({placeholder, navigation}) => {
	const [searchField, setSearchField] = useState("");
	return (
		<View className="flex py-3 px-4 bg-firstprimary">
			<InputField
				label={placeholder}
				placeholder={placeholder}
				value={searchField}
				onChangeText={(text) => setSearchField(text)}
				icon={
					<Icon
						type={Icons.EvilIcons}
						size={30}
						name="search"
						color="gray"
					></Icon>
				}
			/>
		</View>
	);
};

export default Search