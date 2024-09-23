import React from "react";
import {View, StyleSheet} from "react-native";
import Svg, {Defs, Rect, LinearGradient, Stop} from "react-native-svg";

const GradientView = ({
	from_color = "rgb(20, 26, 115)",
	to_color = "rgb(247, 248, 252)",
	index=1,
	classname,
	children,
	x1='0%',
	y1='0%',
	x2='100%',
	y2='100%',
}) => {
	return (
		<View
			style={[StyleSheet.absoluteFill, {overflow: "hidden"}]}
			className={classname}
		>
			<Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
				<Defs>
					<LinearGradient
						id={`gradient-${index}`}
						x1={x1}
						y1={y1}
						x2={x2}
						y2={y2}
					>
						<Stop offset="0%" stopColor={from_color} stopOpacity="1" />
						<Stop offset="100%" stopColor={to_color} stopOpacity="1" />
					</LinearGradient>
				</Defs>
				<Rect
					x="0"
					y="0"
					rx="11"
					ry="11"
					width="100%"
					height="100%"
					fill={`url(#gradient-${index})`}
				/>
			</Svg>
			<View style={StyleSheet.absoluteFill}>{children}</View>
		</View>
	);
};

export default GradientView;
