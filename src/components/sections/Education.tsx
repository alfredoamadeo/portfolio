import {
  Stack,
  Title,
  Text,
  Timeline,
  Card,
  Group,
  Box,
} from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { education } from '../../data';

export function Education() {
  return (
    <Stack gap="xl">
      <Title order={1} size="h2" mb="md">
        Education
      </Title>

      <Box>
        <Timeline active={-1} bulletSize={24} lineWidth={2}>
          {[...education].sort((a, b) => Number(b.id) - Number(a.id)).map((edu) => (
            <Timeline.Item
              key={edu.id}
              bullet={<IconSchool size={12} />}
              title={
                <Text fw={600} size="lg" mb="xs">
                  {edu.degree}
                </Text>
              }
            >
              <Card padding="md" shadow="sm" radius="md" mb="md">
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text c="dimmed" size="md">
                      {edu.school}, {edu.location}
                    </Text>
                    <Text c="dimmed" size="sm" fw={500}>
                      {edu.period}
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Stack>
  );
}
