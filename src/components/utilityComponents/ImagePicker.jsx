import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
	Text,
	TouchableOpacity,
	View,
	PermissionsAndroid,
	Platform,
    Linking,
    Alert
} from "react-native";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";

const ImagePicker = ({setData, field, refRBSheet}) => {
	const options = {
		mediaType: "photo",
		includeBase64: false,
		maxHeight: 2000,
		maxWidth: 2000,
	};

	const requestCameraPermission = async () => {
		try {
			// Check current permission status
			const granted = await PermissionsAndroid.check(
				PermissionsAndroid.PERMISSIONS.CAMERA
			);
			if (granted) {
				return true;
			}

			// Request camera permission
			const status = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: "Camera Permission",
					message: "App needs camera access to take pictures",
					buttonNeutral: "Ask Me Later",
					buttonNegative: "Cancel",
					buttonPositive: "OK",
				}
			);

			if (status === PermissionsAndroid.RESULTS.GRANTED) {
				return true;
			} else if (status === PermissionsAndroid.RESULTS.DENIED) {
                console.log("Camera permission denied");
                Alert.alert(
                    "Permission Required",
                    "You need to grant camera permissions in the settings to take pictures.",
                    [
                        {text: "Cancel", style: "cancel"},
                        {text: "Open Settings", onPress: () => Linking.openSettings()},
                    ],
                    {cancelable: false}
                );
				return false;
			} else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
				return false;
			}
		} catch (err) {
			console.warn(err);
			return false;
		}
	};

	const handleResponse = (response) => {
		if (response.didCancel) {
			console.log("User cancelled image picker");
		} else if (response.error) {
			console.log("ImagePicker Error: ", response.error);
		} else if (response.assets) {
			const source = {uri: response.assets[0].uri};
			setData((prevData) => ({
				...prevData,
				[field]: source,
			}));
		} else {
			console.log("Unexpected response: ", response);
		}
	};

	const handleCamera = async () => {
		if (Platform.OS === "android") {
			const hasPermission = await requestCameraPermission();
			if (!hasPermission) {
				console.warn("Camera permission denied");
				return;
			}
		}

        launchCamera(options, (response) => {
            console.log('Error Response : -> ',response);
			if (response.error) {
				console.warn(`Camera is not available ${response.error}`);
			} else {
				handleResponse(response);
			}
			refRBSheet.current.close();
		});
	};

	const handleGallery = () => {
		launchImageLibrary(options, (response) => {
			handleResponse(response);
			refRBSheet.current.close();
		});
	};

	return (
		<View>
			<RBSheet
				ref={refRBSheet}
				closeOnDragDown={true}
				closeOnPressMask={true}
				height={250}
				customStyles={{
					wrapper: {
						backgroundColor: "rgba(0, 0, 0, 0.5)",
					},
					draggableIcon: {
						backgroundColor: "#000",
					},
				}}
			>
				<View style={{padding: 20}}>
					<Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 10}}>
						Select Image Source
					</Text>
					<TouchableOpacity
						onPress={handleCamera}
						style={{paddingVertical: 15}}
					>
						<Text style={{fontSize: 16, color: "#007BFF"}}>Camera</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleGallery}
						style={{paddingVertical: 15}}
					>
						<Text style={{fontSize: 16, color: "#007BFF"}}>Gallery</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => refRBSheet.current.close()}
						style={{paddingVertical: 15}}
					>
						<Text style={{fontSize: 16, color: "red"}}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</RBSheet>
		</View>
	);
};

export default ImagePicker;
