import React from "react";
import DatePicker from "react-native-date-picker";

const DatePickerComponnet = ({open, setOpen, date, setDate, handleChange}) => {
	return (
		<DatePicker
			modal
			open={open}
			date={date}
			mode="date"
			onConfirm={(date) => {
				setOpen(false);
				setDate(date);
				const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
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
			mode="datetime"
			onConfirm={(date) => {
				setOpen(false);
				setDate(date);
				const formattedDate = date.toISOString().slice(0, 16).replace('T', ' ');
				handleChange("dob", formattedDate);
			}}
			onCancel={() => {
				setOpen(false);
			}}
		/>
	);
};

export { DatePickerComponnet, DateTimePickerComponnet };
