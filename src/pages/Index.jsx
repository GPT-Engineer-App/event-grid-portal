import { Container, SimpleGrid, Box, Text, VStack, HStack, Tag, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMusic, FaFilm, FaPaintBrush } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Music Concert",
    date: "2023-10-15",
    category: "Music",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnR8ZW58MHx8fHwxNzE3MzI4ODgzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2023-10-20",
    category: "Art",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9ufGVufDB8fHx8MTcxNzMyODg4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Film Festival",
    date: "2023-10-25",
    category: "Film",
    image: "https://images.unsplash.com/photo-1623218829553-99f085bd5f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzE3MzI4ODg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    title: "Theater Play",
    date: "2023-10-30",
    category: "Theater",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGxheXxlbnwwfHx8fDE3MTczMjg4ODR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    title: "Jazz Night",
    date: "2024-06-05",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbmlnaHR8ZW58MHx8fHwxNzE3MzI4ODg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    title: "Modern Art Showcase",
    date: "2024-06-10",
    category: "Art",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3QlMjBzaG93Y2FzZXxlbnwwfHx8fDE3MTczMjg4ODR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 7,
    title: "Indie Film Screening",
    date: "2024-06-15",
    category: "Film",
    image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGZpbG18ZW58MHx8fHwxNzE3MzI4ODg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 8,
    title: "Shakespeare in the Park",
    date: "2024-06-20",
    category: "Theater",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGVha2VzcGVhcmUlMjB0aGVhdGVyfGVufDB8fHx8MTcxNzMyODg4NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const categoryIcons = {
  Music: FaMusic,
  Art: FaPaintBrush,
  Film: FaFilm,
  Theater: FaCalendarAlt,
};

const Index = ({ selectedCategory }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredEvents(events.filter((event) => event.category === selectedCategory));
    } else {
      setFilteredEvents(events);
    }
  }, [selectedCategory]);
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Upcoming Events
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredEvents.map((event) => {
            const Icon = categoryIcons[event.category];
            return (
              <Box key={event.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px" height="400px">
                <Image src={event.image} alt={event.title} width="300px" height="200px" objectFit="cover" />
                <Box p={6}>
                  <HStack spacing={4} mb={4}>
                    <Icon size="24px" />
                    <Text fontSize="xl" fontWeight="bold">
                      {event.title}
                    </Text>
                  </HStack>
                  <Text mb={4}>
                    <FaCalendarAlt /> {event.date}
                  </Text>
                  <Tag>{event.category}</Tag>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
