import React, {memo} from "react";
import {
	Text,
	TextInput,
	View,
} from "react-native";

export default EditableInputField = memo(
	({
		label,
		value,
		onChangeText,
		keyboardType = "default",
		autoFocus = false,
		refInput = null,
		editable=true
	}) => {
		return (
			<View className="mb-4">
				<Text className="text-gray-600 mb-1">{label}</Text>
				{value !== undefined && typeof value === "boolean" ? (
					<Text className="text-black text-md">{value ? "Yes" : "No"}</Text>
				) : (
					<>
						{onChangeText ? (
							<TextInput
								ref={refInput}
								value={value}
								onChangeText={onChangeText}
								className="text-black border-b border-gray-300 py-1"
								keyboardType={keyboardType}
								autoFocus={autoFocus}
								returnKeyType="done"
								onSubmitEditing={() => {}}
								editable={editable}
							/>
						) : (
							<Text className="text-black text-md">{value}</Text>
						)}
					</>
				)}
			</View>
		);
	}
);
