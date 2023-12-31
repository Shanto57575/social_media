import { Box } from "@mui/material";

const SideBar = () => {
	return (
		<Box
			bgcolor="lightBlue"
			flex={1}
			p={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			sidebar
		</Box>
	);
};

export default SideBar;
