import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box sx={{ position: "absolute", top: "0", width: "250px", left: "0" }}>
        <Sidebar />
      </Box>
      <Box sx={{ marginLeft: "250px", marginBottom: "100px" }}>{children}</Box>
      <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>player</Box>
    </Box>
  );
};

export default PlayerLayout;
