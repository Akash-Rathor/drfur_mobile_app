import React, {useEffect, useState, useRef, memo} from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";
import NavBar from "../components/NavBar";
import Icon, {Icons} from "../utilities/Icons";
import {DatePickerComponnet} from "../components/utilityComponents/DatePickerComponent";
import ImagePicker from "../components/utilityComponents/ImagePicker";
import EditableInputField from "../components/utilityComponents/EditableInputField";


const Profile = ({ navigation, route }) => {
	const {
		editable = false,
		type = "Personal",
		ProfileData = undefined
	} = route.params || {};

	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	const refRBSheet = useRef();

	const [profileData, setProfileData] = useState(ProfileData);
	const [isEditing, setIsEditing] = useState(false);
	const firstInputRef = useRef(null);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);
	};

	const handleChange = (key, value) => {
		setProfileData((prevData) => ({
			...prevData,
			[key]: value,
		}));
	};

	const openBottomSheet = () => {
		refRBSheet.current.open();
	};

	useEffect(() => {
		const checkImagePicker = async () => {
			if (!launchImageLibrary || !launchCamera) {
				console.warn("Image Picker is not available");
			}
		};
		checkImagePicker();
	}, []);

	useEffect(() => {
		if (isEditing && firstInputRef.current) {
			firstInputRef.current.focus();
		}
	}, [isEditing]);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1 bg-black"
			// keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
		>
			<View className="flex flex-1 flex-col h-screen bg-white">
				<NavBar
					title="Profile"
					bg_color_text="black"
					navigation={navigation}
					showBackButton={true}
					showProfileIcon={false}
				/>
				<ScrollView
					contentContainerStyle={{flexGrow: 1}}
					className="bg-white mb-20"
				>
					<View className="flex flex-col items-center justify-start pt-8 pb-4">
						<View
							className="relative"
							// onPress={() => editable && isEditing && handleImagePick()}
						>
							<Image
								source={profileData.image}
								className="w-32 h-32 rounded-full mb-4"
							/>
							{editable && isEditing && (
								<TouchableOpacity
									className="absolute bottom-4 right-0 bg-firstprimary rounded-full p-2"
									onPress={openBottomSheet}
								>
									<Icon
										type={Icons.Feather}
										name="camera"
										size={20}
										color="white"
									/>
								</TouchableOpacity>
							)}

							{/* Pass ref to ImagePicker for controlling the bottom sheet */}
							<ImagePicker
								setData={setProfileData}
								field="image"
								refRBSheet={refRBSheet}
							/>
						</View>
						{isEditing ? (
							<EditableInputField
								value={profileData.name}
								onChangeText={(text) => handleChange("name", text)}
								className="text-2xl font-bold mb-2 text-center"
								autoFocus={true} // Autofocus the first field
								refInput={firstInputRef} // Assign ref to the first input
							/>
						) : (
							<Text className="text-2xl font-bold mb-2">
								{profileData.name}
							</Text>
						)}
						{profileData.email &&
							(isEditing ? (
								<EditableInputField
									value={profileData.email}
									onChangeText={(text) => handleChange("email", text)}
									className="text-gray-600 mb-6 text-center"
									keyboardType="email-address"
								/>
							) : (
								<Text className="text-gray-600 mb-6">{profileData.email}</Text>
							))}
					</View>
					<View className="bg-white rounded-t-3xl flex-1 px-6 pt-6">
						<View className="flex flex-row justify-between items-center mb-4">
							<Text className="text-lg font-semibold">
								{type === "Pet" ? "Pet Infromation" : "Personal Information"}
							</Text>
							{editable && (
								<TouchableOpacity onPress={isEditing ? handleSave : handleEdit}>
									<Text className="text-firstprimary">
										{isEditing ? "Save" : "Edit"}
									</Text>
								</TouchableOpacity>
							)}
						</View>
						{profileData.phone && (
							<EditableInputField
								label="Phone"
								value={profileData.phone}
								onChangeText={(text) => handleChange("phone", text)}
								keyboardType="phone-pad"
								editable={isEditing}
							/>
						)}
						<EditableInputField
							label="Address"
							value={profileData.address}
							onChangeText={(text) => handleChange("address", text)}
							editable={isEditing}
						/>
						{isEditing ? (
							<View>
								<Text className="text-gray-600 mb-2">Date of Birth</Text>
								<TouchableOpacity onPress={() => setOpen(true)}>
									<Text className="text-firstprimary">
										{profileData.dob || "Select Date"}
									</Text>
									<DatePickerComponnet
										open={open}
										setOpen={setOpen}
										date={date}
										setDate={setDate}
										handleChange={handleChange}
									/>
								</TouchableOpacity>
							</View>
						) : (
							<EditableInputField
								label="Date of Birth"
								value={profileData.dob}
								editable={isEditing}
							/>
						)}
						{type === "Pet" && (
							<TouchableOpacity
								className="flex flex-row justify-between items-center h-10 bg-slate-400 p-2 mt-2 rounded-md"
								onPress={() => navigation.navigate("Prescriptions")}
							>
								<Text className="text-white font-semibold">Prescriptions</Text>
								<Icon
									type={Icons.Feather}
									name="chevron-right"
									size={16}
									color="white"
								/>
							</TouchableOpacity>
						)}
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Profile;
