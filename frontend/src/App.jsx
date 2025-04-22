import { Box, useColorModeValue } from "@chakra-ui/react";
import { Router, Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
				<Route path="/product/:pid" element={<ProductDetail />} />
			</Routes>
		</Box>
	);
}

export default App;
