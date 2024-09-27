import React from "react";
import DatePicker from "react-native-date-picker";
const DatePickerComponnet = ({open, setOpen, date, setDate, handleChange}) => {
	return (
		<DatePicker
			modal
			open={open}
			date={date}
			mode="date" // Set the mode to date to only show year, month, and date
			onConfirm={(date) => {
				setOpen(false);
				setDate(date);
				const formattedDate = date.toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				});
				handleChange("dob", formattedDate);
			}}
			onCancel={() => {
				setOpen(false);
			}}
		/>
	);
};

const DateTimePickerComponnet = ({
	open,
	setOpen,
	date,
	setDate,
	handleChange,
}) => {
	return (
		<DatePicker
			modal
			open={open}
			date={date}
			onConfirm={(date) => {
				setOpen(false);
				setDate(date);
				const formattedDate = date.toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				});
				handleChange("dob", formattedDate);
			}}
			onCancel={() => {
				setOpen(false);
			}}
		/>
	);
};

export { DatePickerComponnet, DateTimePickerComponnet };
