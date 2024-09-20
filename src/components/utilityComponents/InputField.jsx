import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField = ({label, placeholder, value, onChangeText, icon}) => {
    return (
			<View className="flex flex-col">
				<Text className="my-1 text-lg font-semibold text-white">
					{placeholder}
				</Text>
				<View className="flex justify-center items-center flex-row border shadow-md border-slate-400 rounded-xl bg-white">
					{icon && <View className="px-1 self-center">{icon}</View>}
					<TextInput
						style={styles.input}
						placeholder={placeholder}
						value={value}
						onChangeText={onChangeText}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
			</View>
		);
};

const styles = StyleSheet.create({
	input: {
		height: 42,
		flex: 1,
        marginRight: 10,
	},
});

export default InputField;
