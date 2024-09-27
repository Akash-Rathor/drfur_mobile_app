import React, {useEffect, useState, useRef} from "react";
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

const Profile = ({navigation, editable = true}) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	const refRBSheet = useRef();

	const [profileData, setProfileData] = useState({
		name: "John Doe",
		email: "johndoe@gmail.com",
		phone: "+1 234 567 8900",
		address: "123 Main St, City, Country",
		dob: "January 1, 1990",
		image: require("../assets/images/cat.jpg"),
	});

	const [isEditing, setIsEditing] = useState(false);

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

	const EditableField = ({
		label,
		value,
		onChangeText,
		keyboardType = "default",
	}) => (
		<View className="mb-4">
			<Text className="text-gray-600 mb-1">{label}</Text>
			{isEditing ? (
				<TextInput
					value={value}
					onChangeText={onChangeText}
					className="text-black border-b border-gray-300 py-1"
					keyboardType={keyboardType}
				/>
			) : (
				<Text className="text-black text-md">{value}</Text>
			)}
		</View>
	);

	useEffect(() => {
		const checkImagePicker = async () => {
			if (!launchImageLibrary || !launchCamera) {
				console.warn("Image Picker is not available");
			}
		};
		checkImagePicker();
	}, []);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1"
			keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
		>
			<View className="flex flex-1 flex-col h-screen bg-slate-100">
				<NavBar
					title="Profile"
					bg_color_text="black"
					navigation={navigation}
					showBackButton={true}
					showProfileIcon={false}
				/>
				<ScrollView contentContainerStyle={{flexGrow: 1}}>
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
							<EditableField
								value={profileData.name}
								onChangeText={(text) => handleChange("name", text)}
								className="text-2xl font-bold mb-2 text-center"
							/>
						) : (
							<Text className="text-2xl font-bold mb-2">
								{profileData.name}
							</Text>
						)}
						{isEditing ? (
							<EditableField
								value={profileData.email}
								onChangeText={(text) => handleChange("email", text)}
								className="text-gray-600 mb-6 text-center"
								keyboardType="email-address"
							/>
						) : (
							<Text className="text-gray-600 mb-6">{profileData.email}</Text>
						)}
					</View>
					<View className="bg-white rounded-t-3xl flex-1 px-6 pt-6">
						<View className="flex flex-row justify-between items-center mb-4">
							<Text className="text-lg font-semibold">
								Personal Information
							</Text>
							{editable && (
								<TouchableOpacity onPress={isEditing ? handleSave : handleEdit}>
									<Text className="text-firstprimary">
										{isEditing ? "Save" : "Edit"}
									</Text>
								</TouchableOpacity>
							)}
						</View>
						<EditableField
							label="Phone"
							value={profileData.phone}
							onChangeText={(text) => handleChange("phone", text)}
							keyboardType="phone-pad"
						/>
						<EditableField
							label="Address"
							value={profileData.address}
							onChangeText={(text) => handleChange("address", text)}
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
							<EditableField
								label="Date of Birth"
								value={profileData.dob}
								editable={false}
							/>
						)}
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Profile;
