import { Box } from "@mui/material";

const RightSide = () => {
	return (
		<Box
			bgcolor="lightCoral"
			flex={2}
			p={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			rightBar
		</Box>
	);
};

export default RightSide;
