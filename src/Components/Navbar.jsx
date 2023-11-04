import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";

const StyledToolBar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Navbar = () => {
	return (
		<AppBar position="stick">
			<StyledToolBar>
				<Toolbar>Navbar</Toolbar>
			</StyledToolBar>
		</AppBar>
	);
};

export default Navbar;
