import React, {useEffect, useState} from "react";
import {
	FlatList,
	Image,
	Platform,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Cat from "../assets/images/cat.jpg";
import Dog from "../assets/images/dog.jpg";
import NavBar from "../components/NavBar";
import Icon, {Icons} from "../utilities/Icons";

const calculateAge = (consultationDate) => {
  const birthDate = new Date(consultationDate);
  const currentDate = new Date();
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    years--;
    months = 12 + months;
  }
  return {years, months};
};

const PetCard = ({doctor, inPerson, pet, doctorImage, consultationDate, navigation}) => {

  const { years, months } = calculateAge(consultationDate);
  
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Home")}>
			<View className={`flex flex-row justify-start items-center p-2 bg-white`}>
				<Image
					source={doctorImage}
					className="w-12 h-12 rounded-md mr-2 bg-white"
				/>
				<View className="flex flex-col mr-2 flex-1">
					<View className="flex flex-row justify-between">
						<View className="flex flex-col">
							<Text className="font-semibold">{pet}</Text>
							<Text className="font-semibold text-slate-500">({doctor})</Text>
						</View>

						<View className="flex flex-row">
							<Icon
								type={Icons.MaterialIcons}
								name="watch-later"
								size={16}
								className="text-slate-300"
							/>
							<Text className="font-normal text-slate-500 ml-1">
								{years <= 0 ? `${months} Months` : `${years}.${months}  Yrs`}{" "}
							</Text>
						</View>
					</View>
					<Text className="text-sm text-wrap">
						{inPerson ? "In-Person" : "Virtual"}
					</Text>
				</View>
			</View>
			<View className="w-full border-slate-500 ml-5 rounded-full border-b"></View>
		</TouchableOpacity>
	);
};

const PreviousConsultations = ({navigation}) => {
	const [consultations, setConsultations] = useState([
		{
			consultationDate: "2024-01-01",
			doctor: "Dr. Smith",
			pet: "Shadow",
			inPerson: true,
			doctorImage: Dog,
		},
		{
			consultationDate: "2024-07-12",
			doctor: "Dr. Smith",
			pet: "Pluffy",
			inPerson: true,
			doctorImage: Cat,
		},
	]);

	return (
		<>
			<NavBar
				title="Previous Consultations"
				bg_color_text="black"
				navigation={navigation}
				showBackButton={true}
			/>
			<View className="flex flex-col h-screen bg-slate-100">
				<View className="flex flex-col bg-red-80 flex-1">
					<FlatList
						data={consultations}
						renderItem={({item}) => (
							<PetCard
								navigation={navigation}
								doctor={item.doctor}
								inPerson={item.inPerson}
								pet={item.pet}
								doctorImage={item.doctorImage}
								consultationDate={item.consultationDate}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={{
							paddingBottom: Platform.OS === "ios" ? "45%" : "15%",
						}}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		</>
	);
};

export default PreviousConsultations;
