import {
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Group,
  Badge,
  Button,
  Box,
  Anchor,
} from '@mantine/core';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { projects } from '../../data';

export function Portfolio() {
  return (
    <Stack gap="xl">
      <Box>
        <Title order={1} size="h2" mb="md">
          Portfolio
        </Title>
        <Text size="lg" c="dimmed" mb="lg">
          A collection of my recent projects showcasing my skills and experience
        </Text>
      </Box>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="lg"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            h="100%"
          >
            <Card.Section>
              <Image
                src={project.image}
                height={200}
                alt={project.title}
                fallbackSrc="https://placehold.co/400x200?text=Project+Image"
              />
            </Card.Section>

            <Stack gap="md" mt="md" h="100%">
              <Box>
                <Title order={3} size="h4" mb="xs">
                  {project.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  {project.description}
                </Text>
              </Box>

              <Box>
                <Group gap="xs" mb="md">
                  {project.tags.map((tag) => (
                    <Badge key={tag} size="sm" variant="light" color="blue">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Box>

              <Box mt="auto">
                <Group gap="sm">
                  {project.liveUrl && (
                    <Anchor
                      href={project.liveUrl}
                      target="_blank"
                      style={{ textDecoration: 'none', flex: 1 }}
                    >
                      <Button
                        leftSection={<IconExternalLink size={16} />}
                        variant="filled"
                        size="sm"
                        fullWidth
                      >
                        Live Demo
                      </Button>
                    </Anchor>
                  )}
                  {project.codeUrl && (
                    <Anchor
                      href={project.codeUrl}
                      target="_blank"
                      style={{ textDecoration: 'none', flex: 1 }}
                    >
                      <Button
                        leftSection={<IconBrandGithub size={16} />}
                        variant="outline"
                        size="sm"
                        fullWidth
                      >
                        Code
                      </Button>
                    </Anchor>
                  )}
                </Group>
              </Box>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
