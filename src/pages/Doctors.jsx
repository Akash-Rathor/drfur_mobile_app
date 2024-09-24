import React from "react";
import {View, Text} from "react-native";

const Doctors = ({route}) => {
	const {item} = route.params || {};

	return (
		<View>
			<Text>Doctor Details:</Text>
			{item ? (
				<>
					<Text>Name: {item.name}</Text>
					<Text>Degree: {item.degree}</Text>
					<Text>Location: {item.location}</Text>
					<Text>Ratings: {item.ratings}</Text>
					<Text>Status: {item.status}</Text>
				</>
			) : (
				<Text>No data passed.</Text>
			)}
		</View>
	);
};

export default Doctors;
