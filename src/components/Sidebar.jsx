import { Box, List, ListItem, Button } from "@chakra-ui/react";

const categories = ["Music", "Art", "Film", "Theater"];

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Box width="200px" p="4" borderRight="1px solid #ccc">
      <List spacing={3}>
        {categories.map((category) => (
          <ListItem key={category}>
            <Button variant={selectedCategory === category ? "solid" : "outline"} onClick={() => setSelectedCategory(category)}>
              {category}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
