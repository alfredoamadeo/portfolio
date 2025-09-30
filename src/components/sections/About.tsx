import { Stack, Title, Text, SimpleGrid, Card, Badge, Group, Box, ThemeIcon } from "@mantine/core";
import { skills, quickFacts } from "../../data";

export function About() {
  return (
    <Stack gap="xl">
      <Box>
        <Title order={1} size="h2" mb="md">
          About Me
        </Title>
        <Text size="lg" lh={1.6} mb="lg">
          I'm Alfredo III M. Amadeo, a Junior to Mid-level Web Developer with over 2 years of
          hands-on experience in building robust web applications. I specialize in backend
          development using .NET Core and T-SQL Server while also working with JavaScript, C#, Java,
          Python, and SQL. Focused on enhancing my backend skills, I’m constantly exploring new
          technologies to deepen my expertise. My goal is to deliver high-quality, efficient, and
          scalable solutions while evolving into a full-stack engineer.
        </Text>
        <Text size="lg" lh={1.6}>
          I enjoy creating accounting and financial systems, solving complex problems, and making
          sure everything works smoothly. Building these systems is rewarding because it helps users
          work more efficiently and improves day-to-day operations.
        </Text>
      </Box>

      <Box>
        <Title order={2} size="h3" mb="md">
          Skills & Technologies
        </Title>
        <Group gap="xs" mb="lg">
          {skills.map((skill) => (
            <Badge key={skill} size="lg" variant="light" color="blue">
              {skill}
            </Badge>
          ))}
        </Group>
      </Box>

      <Box>
        <Title order={2} size="h3" mb="md">
          Quick Facts
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
          {quickFacts.map((fact, index) => (
            <Card key={index} padding="md" shadow="sm" radius="md">
              <Stack align="center" gap="sm">
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <fact.icon size={20} />
                </ThemeIcon>
                <Text fw={600} size="lg" ta="center">
                  {fact.title}
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                  {fact.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
