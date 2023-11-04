import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import RightSide from "./Components/RightSide";
import { Box, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<SideBar />
				<Feed />
				<RightSide />
			</Stack>
		</Box>
	);
}

export default App;
