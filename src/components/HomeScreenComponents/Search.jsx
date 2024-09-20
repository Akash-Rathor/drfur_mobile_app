import React,{useState} from 'react'
import InputField from '../utilityComponents/InputField';
import { View } from 'react-native';
import Icon, { Icons } from '../../utilities/Icons';

const Search = ({placeholder}) => {

    const [searchField, setSearchField] = useState("");
    return (
			<View className="flex py-5 px-4 bg-firstPrimary">
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
}

export default Search