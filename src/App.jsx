import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Box } from "@chakra-ui/react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <Box display="flex">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Box flex="1">
          <Routes>
            <Route exact path="/" element={<Index selectedCategory={selectedCategory} />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
