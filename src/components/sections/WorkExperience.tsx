import {
  Stack,
  Title,
  Text,
  Timeline,
  Group,
  Card,
  List,
  ThemeIcon,
  Box,
} from '@mantine/core';
import { IconBriefcase, IconCheck } from '@tabler/icons-react';
import { experiences } from '../../data';

export function WorkExperience() {
  return (
    <Stack gap="xl">
      
        <Title order={1} size="h2" mb="md">
          Work Experience
        </Title>

      <Box>
        <Title order={2} size="h3" mb="md">
          Professional Experience
        </Title>
        <Timeline active={-1} bulletSize={24} lineWidth={2}>
          {[...experiences].sort((a, b) => Number(b.id) - Number(a.id)).map((exp) => (
            <Timeline.Item
              key={exp.id}
              bullet={<IconBriefcase size={12} />}
              title={
                <Group gap="xs" mb="xs">
                  <Text fw={600} size="lg">
                    {exp.title}
                  </Text>
                  <Text c="dimmed" size="sm">
                    at {exp.company}
                  </Text>
                </Group>
              }
            >
              <Card padding="md" shadow="sm" radius="md" mb="md">
                <Stack gap="sm">
                  <Text c="dimmed" size="sm" fw={500}>
                    {exp.period}
                  </Text>
                  <Text size="md" lh={1.6}>
                    {exp.description}
                  </Text>
                  <Box>
                    <Text size="sm" fw={500} mb="xs">
                      Key Achievements:
                    </Text>
                    <List
                      spacing="xs"
                      size="sm"
                      icon={
                        <ThemeIcon color="pink" size={16} radius="xl">
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {exp.achievements.map((achievement, index) => (
                        <List.Item key={index}>{achievement}</List.Item>
                      ))}
                    </List>
                  </Box>
                </Stack>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>

      <Box>
        <Title order={2} size="h3" mb="md">
          Education
        </Title>
        <Card padding="md" shadow="sm" radius="md">
          <Stack gap="sm">
            <Group justify="space-between">
              <Text fw={600} size="lg">
                Bachelor of Science in Computer Science
              </Text>
              <Text c="dimmed" size="sm">
                2020 - 2025
              </Text>
            </Group>
            <Text c="dimmed" size="md">
              Pamantasan ng Lungsod ng Maynila, Manila
            </Text>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
}

