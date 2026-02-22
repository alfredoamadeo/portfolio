import {
  Stack,
  Avatar,
  Title,
  Text,
  //Button,
  Group,
  Divider,
  Badge,
  Box,
} from "@mantine/core";
//import { IconDownload } from '@tabler/icons-react';
import { profileData } from "../config/profile";
import { renderContactItem, renderSocialItem } from "../utils/profile";
import type { ProfileAsideProps } from "../types/profile";

export function ProfileAside({ profile = {} }: ProfileAsideProps) {
  // Merge default profile data with provided profile data
  const finalProfile = { ...profileData, ...profile };

  return (
    <Stack gap="lg">
      {/* Profile Image and Basic Info */}
      <Box ta="center">
        <Avatar
          src={finalProfile.avatarUrl}
          size={150}
          radius="50%"
          mx="auto"
          mb="md"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            minWidth: "150px",
            minHeight: "18  0px",
          }}
        />
        <Title order={2} size="h3" mb="xs">
          {finalProfile.name}
        </Title>
        <Text c="dimmed" size="lg" mb="xs">
          {finalProfile.title}
        </Text>
        {finalProfile.tagline && (
          <Text size="sm" c="dimmed" ta="center" mb="md">
            {finalProfile.tagline}
          </Text>
        )}
      </Box>

      {/* Contact Information */}
      <Stack gap="sm">{finalProfile.contacts.map(renderContactItem)}</Stack>

      {/* Social Links */}
      {finalProfile.socials.length > 0 && (
        <>
          <Divider />
          <Stack gap="sm">
            <Text size="sm" fw={500}>
              Connect with me
            </Text>
            <Group gap="sm">{finalProfile.socials.map(renderSocialItem)}</Group>
          </Stack>
        </>
      )}

      {/* Skills Preview */}
      {finalProfile.skills.length > 0 && (
        <>
          <Divider />
          <Stack gap="sm">
            <Text size="sm" fw={500}>
              Key Skills
            </Text>
            <Group gap="xs">
              {finalProfile.skills.map((skill) => (
                <Badge key={skill} size="sm" variant="light">
                  {skill}
                </Badge>
              ))}
            </Group>
          </Stack>
        </>
      )}

      {/* Download CV Button
      {finalProfile.cvUrl && (
        <Button
          leftSection={<IconDownload size={16} />}
          fullWidth
          variant="filled"
          size="md"
          component="a"
          href={finalProfile.cvUrl}
          download = {finalProfile.cvUrl}
        >
          Download CV
        </Button>
      )} */}
    </Stack>
  );
}
